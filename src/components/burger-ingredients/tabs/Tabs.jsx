import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";


export default function Tabs() {
  const [current, setCurrent] = React.useState("bun");
  return (
    <div style={{ display: "flex" }}>
      <Tab value={"bun"} active={current === "bun"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value={"sause"} active={current === "sauses"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value={"main"} active={current === "mains"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}
