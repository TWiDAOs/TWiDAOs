import clsx from "clsx";
import type { FC } from "react";

import styles from "./GlowLogo.module.css";

export type GlowLogoProps = {
  src: string;
};

export const GlowLogo: FC<GlowLogoProps> = ({ src }) => {
  return (
    <div className="w-64 h-64">
      <img alt="logo" src={src} className={clsx("rounded-lg", styles.glow)} />
    </div>
  );
};
