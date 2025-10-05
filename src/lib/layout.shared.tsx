import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/miukyo/katalyst",
    nav: {
      title: (
        <>
          <img src="/katalyst-fire.png" width={24} height={24} alt="Katalyst Logo" />
          <p className="font-bold">Katalyst</p>
        </>
      ),
    },
  };
}
