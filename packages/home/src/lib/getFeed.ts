import Parser from "rss-parser";

import { RSS_URL } from "@/home/const/config";

export const getFeed = async () => {
  let parser = new Parser();

  let feed = await parser.parseURL(RSS_URL);

  return feed;
};
