import type { FC } from "react";
import Marquee from "react-fast-marquee";

import {
  APPLE_URL,
  DISCORD_URL,
  REVUE_URL,
  SPOTIFY_URL,
  TWITTER_URL,
} from "@/home/const/config";

export type EpisodeMarqueeProps = {
  direction?: "right" | "left";
};

export type EpisodeExternalLinkProps = {
  href: string;
};

export const EpisodeExternalLink: FC<EpisodeExternalLinkProps> = ({
  href,
  children,
}) => {
  return (
    <a
      className="mx-4 text-xl uppercase hover:animate-pulse"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      <span>{children}</span>
    </a>
  );
};

export const EpisodeMarquee: FC<EpisodeMarqueeProps> = ({
  direction = "left",
}) => {
  return (
    <Marquee
      pauseOnHover
      direction={direction}
      gradient={false}
      speed={30}
      className="py-2 text-white bg-gradient-to-bl from-indigo-300 to-purple-400"
    >
      <EpisodeExternalLink href={APPLE_URL}>
        Listen on Apple Podcast
      </EpisodeExternalLink>
      <EpisodeExternalLink href={REVUE_URL}>
        New Newsletter Everyweek
      </EpisodeExternalLink>
      <EpisodeExternalLink href={SPOTIFY_URL}>
        Listen on Spotify
      </EpisodeExternalLink>
      <EpisodeExternalLink href={TWITTER_URL}>
        Follow on Twitter
      </EpisodeExternalLink>
      <EpisodeExternalLink href={DISCORD_URL}>
        Join our Discord
      </EpisodeExternalLink>
    </Marquee>
  );
};
