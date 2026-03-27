import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { blogs } from "../../data/blogs";
import { projects } from "../../data/projects";
import { algorithms } from "../../data/algorithms";
import "./index.less";

const blogTypes = Array.from(new Set(blogs.map((item) => item.type)));

const Projects = () => {
  const [activeType, setActiveType] = useState<
    (typeof blogTypes)[number] | "全部"
  >("全部");

  const filteredBlogs = useMemo(() => {
    if (activeType === "全部") return blogs;
    return blogs.filter((blog) => blog.type === activeType);
  }, [activeType]);

  return (
    <section className="section projects" id="projects">
      <h2>项目展示</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <motion.a
            className="card"
            href={project.link}
            target="_blank"
            rel="noreferrer"
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={project.cover} loading="lazy" alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <small>{project.stack.join(" / ")}</small>
          </motion.a>
        ))}
      </div>

      <h2 id="blog">博客</h2>
      <div className="projects__grid">
        {filteredBlogs.map((blog) => (
          <a
            className="card card--lite"
            href={blog.link}
            target="_blank"
            rel="noreferrer"
            key={blog.title}
          >
            <h3>{blog.title}</h3>
            <p>类型：{blog.type}</p>
          </a>
        ))}
      </div>

      <h2 id="algorithm">算法学习</h2>
      {algorithms.map((item) => (
        <div className="algo" key={item.name}>
          <div className="algo__left">
            <h3>{item.name}</h3>
            <p>{item.problem}</p>
            <pre>
              <code>{item.code}</code>
            </pre>
            <a href={item.link} target="_blank" rel="noreferrer">
              查看完整内容
            </a>
          </div>
          <div className="algo__right">
            <h4>学习体会</h4>
            <p>{item.note}</p>
            <p>{item.summary}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
