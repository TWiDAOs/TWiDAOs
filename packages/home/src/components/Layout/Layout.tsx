import type { FC } from "react";

import { EpisodeMarquee } from "@/home/components/EpisodeMarquee";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <EpisodeMarquee />
      <div className="w-full h-[calc(100vh-5.5rem)] bg-gradient-to-bl from-indigo-300 via-blue-300 to-purple-300 border border-white">
        {children}
      </div>
      <EpisodeMarquee direction="right" />
    </>
  );
};
