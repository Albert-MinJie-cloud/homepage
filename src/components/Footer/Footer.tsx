import "./index.less";

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return (
    <footer className="footer">
      © {year}.{month}.{day} MinJie
    </footer>
  );
};

export default Footer;
