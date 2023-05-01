// import React from 'react';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import styles from './not-found.module.css';
import pageNotFound from "../../images/burger_404.gif";

const NotFound404: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img alt="page not found" src={pageNotFound} className={styles.image}/>
        <br />
        <Link to='/' className="text text_type_main-medium">Создать самый вкусный бургер</Link>
      </div>
    </div>
  );
}; 

export default NotFound404;