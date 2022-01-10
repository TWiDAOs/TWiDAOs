import type { ReactNode, FC } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaDiscord, FaGithub, FaTwitter, FaAnchor } from "react-icons/fa";

import {
  APPLE_URL,
  ANCHOR_URL,
  DISCORD_URL,
  GITHUB_URL,
  NEWSLETTER_URL,
  TWITTER_URL,
  SPOTIFY_URL,
} from "@/home/const/config";

interface FooterIconLinkProps {
  children: ReactNode;
  href: string;
}

export const FooterTextLink: FC<FooterIconLinkProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="text-3xl text-gray-100 hover:text-gray-50 hover:animate-pulse"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="inline-block text-xl">
        <BsBoxArrowUpRight className="ml-3" />
      </span>
    </a>
  );
};

export const FooterIconLink: FC<FooterIconLinkProps> = ({ children, href }) => {
  return (
    <a
      href={href}
      className="text-gray-200 hover:text-gray-100 hover:animate-pulse cursor-pointer"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export const FooterLogo: FC = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col justify-center items-center space-y-3">
        <FooterTextLink href={APPLE_URL}>Apple Podcasts</FooterTextLink>
        <FooterTextLink href={SPOTIFY_URL}>Spotify</FooterTextLink>
        <FooterTextLink href={NEWSLETTER_URL}>Newsletter</FooterTextLink>
      </div>
      <div className="flex justify-center mt-12 space-x-6">
        <FooterIconLink href={ANCHOR_URL}>
          <span className="sr-only">Anchor</span>
          <FaAnchor className="w-8 h-8" />
        </FooterIconLink>
        <FooterIconLink href={DISCORD_URL}>
          <span className="sr-only">Discord</span>
          <FaDiscord className="w-8 h-8" />
        </FooterIconLink>
        <FooterIconLink href={GITHUB_URL}>
          <span className="sr-only">Github</span>
          <FaGithub className="w-8 h-8" />
        </FooterIconLink>
        <FooterIconLink href={TWITTER_URL}>
          <span className="sr-only">Twitter</span>
          <FaTwitter className="w-8 h-8" />
        </FooterIconLink>
      </div>
    </div>
  );
};
