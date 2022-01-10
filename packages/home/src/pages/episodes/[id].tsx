import { MdHeadsetMic } from "react-icons/md";

import { Layout } from "@/home/components/Layout";
import { getFeed } from "@/home/lib/getFeed";

export const EpisodesPage = ({ episode }): JSX.Element => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center space-y-8 h-full">
        <h1 className="text-4xl font-semibold text-white">{episode.title}</h1>
        <div className="flex flex-col">
          <img
            className="rounded-md"
            src={episode.itunes.image}
            width={300}
            height={300}
            alt="Cover"
          />
          <div className="flex justify-center mt-8">
            <a
              href={episode.link}
              className="text-3xl font-semibold text-center text-white hover:underline hover:animate-pulse"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen
              <span className="inline-block text-2xl">
                <MdHeadsetMic className="ml-3" />
              </span>
            </a>
          </div>
        </div>

        <div
          className="px-3 max-w-lg text-white"
          dangerouslySetInnerHTML={{ __html: episode.content }}
        />
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

export const getStaticProps = async context => {
  const { id } = context.params;
  const feed = await getFeed();
  const episode = feed.items.filter(episode => {
    return episode.title.slice(episode.title.length - 3) === id;
  })[0];

  return {
    props: {
      episode,
    },
  };
};

export default EpisodesPage;
