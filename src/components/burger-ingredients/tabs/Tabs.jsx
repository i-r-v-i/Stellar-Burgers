import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredients } from '../../utils/data.js';
import React from 'react';

function searchType(arr) {
 
    arr.forEach((item) => {
      const type = item.type;
        return type;
    })
    }
    
    export const currentTupe = searchType(ingredients);

export default function Tabs() {
    const [current, setCurrent] = React.useState('buns')
    return (
      <div style={{ display: 'flex' }}>
        <Tab value={'bun'} active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value={'sause'} active={current === 'sauses'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value={'main'} active={current === 'mains'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    )
  }