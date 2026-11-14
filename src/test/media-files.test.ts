import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { projects } from "@/content/projects";

const publicPath = (url: string) => resolve(__dirname, "../../public", url.replace(/^\//, ""));

describe("site media", () => {
  const urls = projects.flatMap((p) =>
    p.media.flatMap((m) => (m.kind === "video" ? [m.src, m.poster] : [])),
  );

  it("references 16 portfolio video and poster files", () => {
    expect(urls).toHaveLength(16);
  });

  it.each(urls)("%s exists under public/", (url) => {
    expect(url.startsWith("/assets/")).toBe(true);
    expect(existsSync(publicPath(url))).toBe(true);
  });

  it("portrait exists and no Lovable asset paths remain", () => {
    expect(existsSync(publicPath("/assets/daniel-portrait.jpg"))).toBe(true);
    for (const file of ["src/content/projects.ts", "src/components/site/About.tsx"]) {
      const text = readFileSync(resolve(__dirname, "../..", file), "utf8");
      expect(text).not.toMatch(/__l5e|\.asset\.json/);
    }
  });
});
