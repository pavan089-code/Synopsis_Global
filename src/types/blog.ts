export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  published: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export type BlogPostInput = Omit<BlogPost, "id" | "createdAt" | "updatedAt">;
