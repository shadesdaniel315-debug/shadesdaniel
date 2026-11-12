import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { inquiryServiceOptions } from "@/content/services";
import { budgetOptions, contactSchema, type ContactInput } from "@/lib/contact-schema";
import { submitInquiry } from "@/lib/contact.functions";
import { cn } from "@/lib/utils";

type Status = { kind: "idle" } | { kind: "success" } | { kind: "error"; message: string };

function Field({
  id,
  label,
  optional,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string | undefined;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <Label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
        {optional ? (
          <span className="ml-1.5 font-normal text-muted-foreground">(optional)</span>
        ) : (
          <span aria-hidden="true" className="ml-0.5 text-primary">*</span>
        )}
      </Label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = "h-11 bg-background text-sm";

export function ContactForm({ presetService }: { presetService?: string | undefined }) {
  const send = useServerFn(submitInquiry);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const startedAt = useRef<number>(0);
  const honeypot = useRef<HTMLInputElement>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: "", email: "", company: "", service: "", budget: "", details: "" },
  });

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (presetService && inquiryServiceOptions.some((o) => o.value === presetService)) {
      setValue("service", presetService, { shouldValidate: false });
    }
  }, [presetService, setValue]);

  const onSubmit = async (values: ContactInput) => {
    setStatus({ kind: "idle" });
    try {
      const res = await send({
        data: { ...values, website: honeypot.current?.value ?? "", startedAt: startedAt.current || Date.now() },
      });
      if (res.ok) {
        setStatus({ kind: "success" });
        reset();
        startedAt.current = Date.now();
      } else {
        setStatus({ kind: "error", message: res.error });
      }
    } catch {
      setStatus({ kind: "error", message: "Something went wrong while sending. Please check your details and try again." });
    }
  };

  if (status.kind === "success") {
    return (
      <div role="status" className="flex min-h-[28rem] flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-elevated">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl font-extrabold text-foreground">Inquiry received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thanks for the details. I'll review what you've shared and reply to the email address you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-8 text-sm font-semibold text-primary hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  const aria = (name: keyof ContactInput) =>
    errors[name] ? { "aria-invalid": true as const, "aria-describedby": `${name}-error` } : {};

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border bg-card p-6 shadow-elevated sm:p-8"
      aria-label="Project inquiry form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full name" error={errors.fullName?.message}>
          <Input id="fullName" autoComplete="name" className={inputClass} {...register("fullName")} {...aria("fullName")} />
        </Field>
        <Field id="email" label="Business email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" className={inputClass} {...register("email")} {...aria("email")} />
        </Field>
        <Field id="company" label="Company or website" optional error={errors.company?.message} className="sm:col-span-2">
          <Input id="company" autoComplete="organization" className={inputClass} {...register("company")} {...aria("company")} />
        </Field>
        <Field id="service" label="Service required" error={errors.service?.message}>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="service" className={inputClass} onBlur={field.onBlur} {...aria("service")}>
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  {inquiryServiceOptions.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
        <Field id="budget" label="Estimated budget" optional error={errors.budget?.message}>
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger id="budget" className={inputClass} onBlur={field.onBlur}>
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((b) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
        <Field id="details" label="Project details" error={errors.details?.message} className="sm:col-span-2">
          <Textarea
            id="details"
            rows={5}
            placeholder="What are you trying to improve? Where does your current process get stuck?"
            className="min-h-32 resize-y bg-background text-sm"
            {...register("details")}
            {...aria("details")}
          />
        </Field>
      </div>

      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input ref={honeypot} id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6">
        <Controller
          control={control}
          name="consent"
          render={({ field }) => (
            <div className="flex items-start gap-3">
              <Checkbox
                id="consent"
                checked={field.value === true}
                onCheckedChange={(v) => field.onChange(v === true)}
                className="mt-0.5"
                {...aria("consent")}
              />
              <Label htmlFor="consent" className="text-xs font-normal leading-relaxed text-muted-foreground">
                I agree that the details above will be stored and used only to reply to this inquiry, as described in
                the{" "}
                <Link to="/privacy" className="font-semibold text-primary hover:underline">
                  privacy policy
                </Link>
                .
              </Label>
            </div>
          )}
        />
        {errors.consent && (
          <p id="consent-error" role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {errors.consent.message}
          </p>
        )}
      </div>

      {status.kind === "error" && (
        <div role="alert" className="mt-6 flex gap-2.5 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{status.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send Project Inquiry
            <Send className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
