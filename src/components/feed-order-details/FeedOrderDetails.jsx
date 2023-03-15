import styles from "./FeedOrderDetails.module.css";
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { useParams } from "react-router-dom";


export default function FeedOrderDetails({ bac }) {
    // const { id } = useParams();
   const FeedOrderDetailsRouteModal = () =>{
    return (
        null
    )
   }
   
    const FeedOrderDetailsRoute = () => {
    return(
        <section className={styles.wrapperRoute}>
        <div className={`${styles.routeStyle}`}>
        <h1 className={`${styles.number} text text_type_digits-default`}>
          000340
        </h1>
           <h2 className="text text_type_main-medium mt-5 mb-2">Black Hole Singularity острый бургер</h2>
           <p className={`${styles.status} text text_type_main-small mb-15`}>Выполнен</p>
           <h3 className="text text_type_main-medium">Состав:</h3>
           <div className={styles.scrollWrapper}>

           </div>
        </div>
        </section>
    )
}

return bac ? <FeedOrderDetailsRouteModal /> : <FeedOrderDetailsRoute />;
}