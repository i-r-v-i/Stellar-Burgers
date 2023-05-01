import styles from "./Form.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { FC, PropsWithChildren, FormEvent} from 'react';

type TFormProps = PropsWithChildren<{
  extraClass?: string;
  title?: string;
  button: boolean;
  buttonText: string;
  question: string;
  link: string;
  question2?: string;
  link2?: string;
  route: string;
  route2?: string;
  onButtonClick: (e: SubmitEvent | FormEvent<HTMLFormElement>) => void;
}>

type TGetSpanProps = {
  question: string;
    link: string;
    question2?: string;
    link2?: string;
    route: string;
    route2?: string;
}

const Form: FC<TFormProps> = ({
  extraClass,
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
  onButtonClick,
}) => {
  
  const GetSpan: FC<TGetSpanProps> = ({
    question,
    link,
    question2 = '',
    link2 = '',
    route,
    route2,
  }) => {
    return (
      <div className={styles.spanContainer}>
        <div
          className={`${styles.span} text text_type_main-default text_color_inactive`}
        >
          <span>{question}</span>
          <Link to={route} className={styles.link}>
            {link}
          </Link>
        </div>
        {question2 && link2 && (
          <div
            className={`${styles.span} text text_type_main-default text_color_inactive`}
          >
            <span>{question2}</span>
            {route2 && 
            <Link to={route2} className={styles.link}>
            {link2}{" "}
          </Link>
            }
            
          </div>
        )}
      </div>
    );
  };

  return (
    <form className={`${styles.form} ${extraClass}`} onSubmit={onButtonClick}>
      {title ? (
        <h1 className={`${styles.title} text text_type_main-medium`}>
          {title}
        </h1>
      ) : null}
      {children}

      <div className={styles.buttonContainer}>
        {button == true ? (
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
          >
            {buttonText}
          </Button>
        ) : null}
        <GetSpan
          question={question}
          link={link}
          question2={question2}
          link2={link2}
          route={route}
          route2={route2}
        />
      </div>
    </form>
  );
}

export default Form;