import { EpisodeMarquee } from "@/home/components/EpisodeMarquee";
import { FooterLogo } from "@/home/components/FooterLogo";
import { GlowLogo } from "@/home/components/GlowLogo";

export const IndexPage = (): JSX.Element => {
  return (
    <>
      <EpisodeMarquee />
      <div className="w-full h-[calc(100vh-5.5rem)] bg-gradient-to-bl from-indigo-300 via-blue-300 to-purple-300 border border-white">
        <div className="flex flex-col justify-center items-center space-y-24 h-full">
          <GlowLogo src="cover.png" />
          <FooterLogo />
        </div>
      </div>
      <EpisodeMarquee direction="right" />
    </>
  );
};

export default IndexPage;
