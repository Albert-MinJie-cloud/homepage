import { useState } from "react";
import "./index.less";

const HeaderNav = () => {
  const navItems = [
    { label: "首页", href: "#home" },
    { label: "关于我", href: "#about" },
    { label: "项目展示", href: "#projects" },
    { label: "联系方式", href: "#contact" },
  ] as const;
  const [activeHref, setActiveHref] = useState<string>(navItems[0].href);

  return (
    <nav className="header__nav">
      {navItems.map((item) => (
        <a
          key={item.href}
          className={
            activeHref === item.href
              ? "header__navItem header__navItem--active"
              : "header__navItem"
          }
          href={item.href}
          onClick={() => setActiveHref(item.href)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default HeaderNav;
