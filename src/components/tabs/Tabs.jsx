import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab } from "../../services/actions/activeTab";


export default function Tabs() {
  const activeTab = useSelector((store) => store.activeTab.activeTab);
  
  const dispatch = useDispatch();
 
  const handleTabClick = (id) => {
    dispatch(setActiveTab(id));
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
   
}

  return (
    <div style={{ display: "flex" }}>
      <Tab value={"bun"} active={activeTab === "bun"} onClick = {handleTabClick}>
        Булки
      </Tab>
      <Tab value={"sauce"} active={activeTab === "sauce"} onClick = {handleTabClick}>
        Соусы
      </Tab>
      <Tab value={"main"} active={activeTab === "main"} onClick = {handleTabClick}>
        Начинки
      </Tab>
    </div>
  );
}
