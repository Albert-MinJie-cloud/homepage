import "./index.less";

const Contact = () => {
  const contacts: Record<
    string,
    {
      name?: string;
      href: string;
      text: string;
      external?: boolean;
      icon?: string;
    }
  > = {
    Email: {
      name: "邮箱",
      href: "mailto:minjie@example.com",
      text: "albert.min97@gmail.com",
      icon: "mail",
    },
    Wechat: {
      name: "微信",
      href: "https://x.com/",
      text: "https://x.com/",
      external: true,
      icon: "mail",
    },
    GitHub: {
      name: "GitHub",
      href: "https://github.com/",
      text: "https://github.com/",
      external: true,
      icon: "mail",
    },
    QQ: {
      name: "QQ",
      href: "https://x.com/",
      text: "https://x.com/",
      external: true,
      icon: "mail",
    },
  };

  return (
    <section className="section contact" id="contact">
      <h2>联系方式</h2>
      <ul>
        {Object.entries(contacts).map(([label, item]) => (
          <li key={label}>
            {item.name}:
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
