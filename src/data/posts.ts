import { Post } from "./posts/types";
import { whatsappPosts } from "./posts/whatsapp";
import { tallyPosts } from "./posts/tally";
import { erpPosts } from "./posts/erp";
import { webPosts } from "./posts/web";
import { seoPosts } from "./posts/seo";
import { advisoryPosts } from "./posts/advisory";

export type { Post, PostSection } from "./posts/types";

// Curated & sorted publications across all enterprise categories
export const posts: Post[] = [
  ...whatsappPosts,
  ...tallyPosts,
  ...erpPosts,
  ...webPosts,
  ...seoPosts,
  ...advisoryPosts,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
