import { FooterLogo } from "@/home/components/FooterLogo";
import { GlowLogo } from "@/home/components/GlowLogo";

export const IndexPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-indigo-300 via-blue-300 to-purple-300">
      <div className="flex flex-col justify-center items-center space-y-24 h-screen">
        <GlowLogo src="cover.png" />
        <FooterLogo />
      </div>
    </div>
  );
};

export default IndexPage;
