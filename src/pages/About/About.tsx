import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import "./index.less";

const About = () => {
  return (
    <section className="about section" id="about">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        关于我
      </motion.h2>
      <p>我热爱构建高性能、可维护的 Web 产品，关注用户体验与工程质量。</p>
      <div className="about__skills">
        {skills.map((skill) => (
          <span key={skill} className="about__skill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;
