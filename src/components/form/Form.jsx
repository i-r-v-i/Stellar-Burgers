import styles from "./Form.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';

export default function Form({
  title,
  children,
  button = true,
  buttonText,
  question,
  link,
  question2,
  link2,
  route,
  route2,
  onButtonClick
}) {
  const GetSpan = ({ question, link, question2 = null, link2 = null, route, route2 }) => {
    return (
      <div className={styles.spanContainer}>
        <div
          className={`${styles.span} text text_type_main-default text_color_inactive`}
        >
          <span>{question}</span>
          <Link to={route} className={styles.link}>{link}</Link>
        </div>
        {question2 && link2 && (
          <div
            className={`${styles.span} text text_type_main-default text_color_inactive`}
          >
            <span>{question2}</span>
            <Link to={route2} className={styles.link}>{link2} </Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <form className={styles.form}>
      <h1 className={`${styles.title} text text_type_main-medium`}>{title}</h1>
      {children}
      <div className={styles.buttonContainer}>
      {button && (
        <Button htmlType="submit" type="primary" size="medium" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
      <GetSpan
        question={question}
        link={link}
        question2={question2}
        link2={link2}
        route = {route}
        route2={route2}
      />
      </div>
    </form>
  );
}
