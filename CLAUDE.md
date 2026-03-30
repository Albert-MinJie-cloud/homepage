# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用命令

```bash
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本
npm run preview  # 预览构建结果
npm run deploy   # 构建并部署到 GitHub Pages
```

## 项目架构

个人作品集网站，单页应用，无路由，页面按从上到下的顺序渲染。

### 页面结构 (src/pages/)
- **Header** - 首屏区域，包含头像、打字机效果介绍、导航栏
- **About** - 关于我，展示技能列表
- **Projects** - 项目展示卡片
- **Contact** - 联系方式

### 数据层 (src/data/)
所有内容数据独立存放，支持 TypeScript 类型：
- `skills.ts` - 技能列表
- `projects.ts` - 项目信息 (ProjectItem[])
- `blogs.ts` - 博客文章 (BlogItem[])
- `algorithms.ts` - 算法笔记 (AlgorithmItem[])

### 公共组件 (src/components/)
- **HeaderNav** - 顶部导航锚点跳转
- **Footer** - 页脚
- **BackHomeButton** - 返回顶部按钮

### 样式
使用 Less，每个组件/页面都有对应的 `index.less` 文件。

### 部署
使用 gh-pages 部署到 GitHub Pages，base 路径配置为 `/homepage`。
