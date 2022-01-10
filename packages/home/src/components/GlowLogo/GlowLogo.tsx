import clsx from "clsx";
import Link from "next/link";
import type { FC } from "react";

import styles from "./GlowLogo.module.css";

export type GlowLogoProps = {
  src: string;
};

export const GlowLogo: FC<GlowLogoProps> = ({ src }) => {
  return (
    <div className="w-64 md:w-72 lg:w-96 h-64 md:h-72 lg:h-96 transition-all duration-300 hover:scale-105">
      <Link passHref href="/episodes">
        <a>
          <img
            alt="logo"
            src={src}
            className={clsx("rounded-lg", styles.glow)}
          />
        </a>
      </Link>
    </div>
  );
};
