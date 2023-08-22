import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { setActiveTab } from "../../services/actions/activeTab";
import { useCallback, FC } from "react";
import { getActiveTab } from "../utils/constants";
import { useAppDispatch, useAppSelector } from "../../services/types/hooks";

const Tabs: FC = () => {
  const { activeTab } = useAppSelector(getActiveTab);

  const dispatch = useAppDispatch();

  const handleTabClick = useCallback((id: string) => {
    dispatch(setActiveTab(id));
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Tab value={"bun"} active={activeTab === "bun"} onClick={handleTabClick}>
        Булки
      </Tab>
      <Tab
        value={"sauce"}
        active={activeTab === "sauce"}
        onClick={handleTabClick}
      >
        Соусы
      </Tab>
      <Tab
        value={"main"}
        active={activeTab === "main"}
        onClick={handleTabClick}
      >
        Начинки
      </Tab>
    </div>
  );
}

export default Tabs;