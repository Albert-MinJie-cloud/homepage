export type ProjectItem = {
  name: string;
  cover: string;
  description: string;
  stack: string[];
  link: string;
};

export const projects: ProjectItem[] = [
  {
    name: "个人博客系统",
    cover: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    description: "支持文章发布、分类筛选与全文搜索。",
    stack: ["React", "TypeScript", "Node.js"],
    link: "https://example.com/project/blog",
  },
  {
    name: "任务管理平台",
    cover: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
    description: "多角色协作的看板工具，支持拖拽与统计。",
    stack: ["React", "Less", "Vite"],
    link: "https://example.com/project/task",
  },
];
