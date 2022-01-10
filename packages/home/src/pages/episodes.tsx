import Link from "next/link";

import { Layout } from "@/home/components/Layout";
import { getFeed } from "@/home/lib/getFeed";

export const EpisodesPage = ({ feed }): JSX.Element => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center space-y-12 h-full">
        {feed.items.map(episode => {
          return (
            <h3
              key={episode.title}
              className="text-3xl text-white hover:underline"
            >
              <Link
                href={`/episodes/${episode.title.slice(
                  episode.title.length - 3,
                )}`}
              >
                {episode.title}
              </Link>
            </h3>
          );
        })}
      </div>
    </Layout>
  );
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
