export type BlogItem = {
  title: string;
  type: "前端" | "工程化" | "算法";
  link: string;
};

export const blogs: BlogItem[] = [
  {
    title: "React 性能优化实践",
    type: "前端",
    link: "https://example.com/blog/react-performance",
  },
  {
    title: "Vite 构建提速指南",
    type: "工程化",
    link: "https://example.com/blog/vite-speed",
  },
  {
    title: "二叉树遍历总结",
    type: "算法",
    link: "https://example.com/blog/tree-traverse",
  },
];
