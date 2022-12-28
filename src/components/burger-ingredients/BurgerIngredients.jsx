import React from 'react';
import Tabs from './tabs/Tabs';
import styles from './BurgerIngredients.module.css';
import IngredientList from './ingredient-list/IngredientList';
import { ingredients } from '../utils/data.js';


function BurgerIngredients() {
    return (
        <section className={ `${styles.burgerIngredients} mb-10 pt-10` } >
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <Tabs />
            <IngredientList list = {ingredients} type = "bun" title = "Булки"/>
            <IngredientList list = {ingredients} type = "sauce" title = "Соусы"/> 
            <IngredientList list = {ingredients} type = "main" title = "Начинки" />
        </section>
    )
}


export default BurgerIngredients;