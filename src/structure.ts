export interface ArticleItem {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: null | string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
export type NewsItems = ArticleItem[] | null;
