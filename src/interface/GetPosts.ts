export interface GetPosts {
  post: {
    id: number;
    title: string;
    author: string;
    content: string;
    modifiedDate: string;
  }[];
}
