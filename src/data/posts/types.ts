export interface PostSection {
  heading: string;
  body: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  sections: PostSection[];
}
