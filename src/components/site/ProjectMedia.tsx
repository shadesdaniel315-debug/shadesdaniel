import { Play } from "lucide-react";
import type { ProjectMedia as Media } from "@/content/projects";
import { AiQualificationIllustration, PipelineIllustration } from "./ProjectIllustrations";

export function MediaThumb({ media, title }: { media: Media; title: string }) {
  if (media.kind === "illustration") {
    return media.name === "pipeline" ? <PipelineIllustration compact /> : <AiQualificationIllustration />;
  }
  return (
    <>
      <img
        src={media.poster}
        alt={`Preview frame from the ${title} recording`}
        loading="lazy"
        decoding="async"
        width={1000}
        height={450}
        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
      />
      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground shadow-card backdrop-blur">
        <Play className="h-3 w-3 fill-current" aria-hidden="true" />
        Video
      </span>
    </>
  );
}

export function MediaFull({ media, title }: { media: Media; title: string }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-xl border border-border bg-muted">
        {media.kind === "video" ? (
          <video
            src={media.src}
            poster={media.poster}
            controls
            muted
            loop
            playsInline
            preload="metadata"
            className="block aspect-[16/7.5] h-auto w-full bg-muted object-contain"
            aria-label={`Screen recording: ${title}`}
          />
        ) : (
          <div className="aspect-[16/8]">
            {media.name === "pipeline" ? <PipelineIllustration /> : <AiQualificationIllustration />}
          </div>
        )}
      </div>
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">{media.caption}</figcaption>
    </figure>
  );
}
