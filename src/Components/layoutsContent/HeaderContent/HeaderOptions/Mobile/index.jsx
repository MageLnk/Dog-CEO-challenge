import { useContext } from "react";
import { NavLink } from "react-router-dom";
// Contetx
import LanguageContext from "../../../../../Context/LanguageContext";
// Components
import { SelectLanguage } from "../../../..";
// Style
import { Dropdown, Space } from "antd";
import { AiOutlineDown, AiOutlineSmile } from "react-icons/ai";
import "./style.css";
// App
const HeaderOptions = () => {
  const { siteLanguage } = useContext(LanguageContext);

  console.log("siteLanguage", siteLanguage);

  const items = [
    {
      key: "1",
      label: (
        <NavLink to={"/search"} className={({ isActive }) => (isActive ? "header-option-active-xs" : "")}>
          <span>{siteLanguage && siteLanguage.Components.layoutsContent.HeaderContent.HeaderOptions.spanSearch}</span>
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink to={"/favorites"} className={({ isActive }) => (isActive ? "header-option-active-xs" : "")}>
          <span>
            {siteLanguage && siteLanguage.Components.layoutsContent.HeaderContent.HeaderOptions.spanFavorites}
          </span>
        </NavLink>
      ),
      icon: <AiOutlineSmile />,
    },
    {
      key: "3",
      label: <SelectLanguage />,
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {siteLanguage && siteLanguage.Components.layoutsContent.HeaderContent.HeaderOptions.Mobile.spanMenu}
          <AiOutlineDown />
        </Space>
      </a>
    </Dropdown>
  );
};

export default HeaderOptions;
