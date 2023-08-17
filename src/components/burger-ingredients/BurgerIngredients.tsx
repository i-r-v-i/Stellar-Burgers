import Tabs from "../tabs/Tabs";
import styles from "./BurgerIngredients.module.css";
import IngredientList from "../ingredient-list/IngredientList";
import { useEffect } from "react";
import { setActiveTab } from "../../services/actions/activeTab";
import { FC } from 'react';
import { useAppDispatch } from "../../services/types/hooks";


const BurgerIngredients: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      dispatch(setActiveTab(entries[0].target.id));
    };
    const observer = new IntersectionObserver(callback, {
      root: document.querySelector("#scrollSection"),
      rootMargin: "0px 0px 400% 0px",
      threshold: 1,
    });

    const bunSection = document.getElementById("bun");
    const sauceSection = document.getElementById("sauce");
    const mainSection = document.getElementById("main");

    observer.observe(bunSection as HTMLElement);
    observer.observe(sauceSection as HTMLElement);
    observer.observe(mainSection as HTMLElement);
  }, []);

  return (
    <section className={`${styles.burgerIngredients} mb-10 pt-10`}>
      <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
      <Tabs />
      <div className={styles.wrapper} id="scrollSection">
        <IngredientList ingType="bun" title="Булки" />
        <IngredientList ingType="sauce" title="Соусы" />
        <IngredientList ingType="main" title="Начинки" />
      </div>
    </section>
  );
}

export default BurgerIngredients;
