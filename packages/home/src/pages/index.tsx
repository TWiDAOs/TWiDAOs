import { FooterLogo } from "@/home/components/FooterLogo";
import { GlowLogo } from "@/home/components/GlowLogo";
import { Layout } from "@/home/components/Layout";

export const IndexPage = (): JSX.Element => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center space-y-12 h-full">
        <GlowLogo src="cover.png" />
        <FooterLogo />
      </div>
    </Layout>
  );
};

export default IndexPage;
