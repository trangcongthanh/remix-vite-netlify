import { config } from "@keystatic/core";
import { posts } from "./collections/posts";
import { aboutMe } from "./singletons/about-me";
import { settings } from "./singletons/settings";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts,
  },
  singletons: {
    aboutMe,
    settings,
  },
});
