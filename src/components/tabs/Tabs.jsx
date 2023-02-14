import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

export default function Tabs() {
  const activeTab = useSelector((store) => store.activeTab.activeTab);

  return (
    <div style={{ display: "flex" }}>
      <Tab value={"bun"} active={activeTab === "bun"}>
        Булки
      </Tab>
      <Tab value={"sauce"} active={activeTab === "sauce"}>
        Соусы
      </Tab>
      <Tab value={"main"} active={activeTab === "main"}>
        Начинки
      </Tab>
    </div>
  );
}
