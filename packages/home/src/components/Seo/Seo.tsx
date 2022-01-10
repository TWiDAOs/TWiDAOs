import { DefaultSeo as Default } from "next-seo";
import Head from "next/head";
import type { FC } from "react";

export const Seo: FC = () => {
  return (
    <>
      <Default
        noindex={false}
        nofollow={false}
        title="TWiDAOs | This Week in DAOs"
        canonical="https://twidaos.com"
        description="DAOs are eating the world."
        openGraph={{
          locale: "en_US",
          site_name: "twidaos.com",
          type: "website",
          url: "https://twidaos.com",
          images: [{ url: "https://twidaos.com/ogp.png" }],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@TWiDAOs",
          site: "@TWiDAOs",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </>
  );
};
