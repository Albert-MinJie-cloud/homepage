import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import avatar from "../../assets/photo.png";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import "./index.less";

const Header = () => {
  return (
    <header className="header" id="home">
      <HeaderNav />

      <motion.div
        className="header__inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="header__left">
          <h2>
            <div>你好，我是闵杰</div>
            <div>前端开发工程师</div>
          </h2>

          <p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "专注前端开发与用户体验设计，持续构建高质量、可维护的产品。",
                  )
                  .callFunction(({ elements }) => {
                    elements.cursor.style.display = "none";
                  })
                  .pauseFor(99999999)
                  .start();
              }}
              options={{
                autoStart: false,
                loop: false,
                delay: 75,
              }}
            />
          </p>

          <div className="header__meta">
            <div>
              <span>现居地： 中国 · 上海</span>
            </div>
            <div>
              <span>到岗时间：1 ~ 2 周</span>
            </div>
          </div>
          <div className="header__actions">
            <a className="header__btn" href="#projects">
              下载简历
            </a>
          </div>
        </div>
        <div className="header__right">
          <img
            className="header__avatar"
            loading="lazy"
            alt="avatar"
            src={avatar}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
