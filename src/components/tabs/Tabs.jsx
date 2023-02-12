import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";


export default function Tabs() {
  const [current, setCurrent] = React.useState("bun");

  
  const handleClickOnType = (id) => {
    setCurrent(id);
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div style={{ display: "flex" }}>
      <Tab value={"bun"} active={current === "bun"} onClick={handleClickOnType}>
        Булки
      </Tab>
      <Tab value={"sauce"} active={current === "sauce"} onClick={handleClickOnType}>
        Соусы
      </Tab>
      <Tab value={"main"} active={current === "main"} onClick={handleClickOnType}>
        Начинки
      </Tab>
    </div>
  );
}
