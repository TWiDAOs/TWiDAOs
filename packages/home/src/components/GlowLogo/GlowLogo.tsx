import type { FC } from "react";

import styles from "./GlowLogo.module.css";

export type GlowLogoProps = {
  src: string;
};

export const GlowLogo: FC<GlowLogoProps> = ({ src }) => {
  return (
    <div className="relative w-48 h-48">
      <img alt="logo" src={src} className={styles.glow} />
    </div>
  );
};
