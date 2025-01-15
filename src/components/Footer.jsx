import { useTranslation } from "react-i18next";

import "./Footer.css";

const /* TODO: UI design to logic \\ compopent Footer */ Footer = () => {
    const { i18n } = useTranslation();
    return (
      <div className="myfooter">
        <footer dir="auto" className="ali">
          {i18n.language === "en" && "Designed and developed by mohamed.com"}
          {i18n.language === "ar" && "تم التصميم والبرمجة بواسطة محمد"}
          {i18n.language === "fr" && "Designed and developed by mohamed.com"}
          <span>
            {" "}
            {/* icon to font awesome */}
            <i className="fa-solid fa-heart"></i>{" "}
          </span>
        </footer>
      </div>
    );
  };

export default Footer;
