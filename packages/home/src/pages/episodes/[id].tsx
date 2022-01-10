import { FooterLogo } from "@/home/components/FooterLogo";
import { Layout } from "@/home/components/Layout";
import { getFeed } from "@/home/lib/getFeed";

export const EpisodesPage = ({ feed }): JSX.Element => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center space-y-12 h-full">
        {JSON.stringify(feed, null, 4)}
        <FooterLogo />
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const feed = await getFeed();

  const paths = feed.items.map(episode => {
    return {
      params: { id: episode.title.slice(episode.title.length - 3) },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async () => {
  const feed = await getFeed();

  return {
    props: {
      feed,
    },
  };
};

export default EpisodesPage;
