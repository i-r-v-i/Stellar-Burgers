import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../components/form/Form";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from './profile.module.css';

export default function ProfilePage() {
  const [form, setValue] = useState({ name: "", email: "", password: "" });

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.profileContainer}>
      <nav className="mr-15">
        <ul>
          <li>
            <Link>Профиль</Link>
          </li>
          <li>
            <Link>История заказов</Link>
          </li>
          <li>
            <Link>Выход</Link>
          </li>
        </ul>
      </nav>
      <Form
        title="Регистрация"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        link="Войти"
        route="/login"
      >
        <Input
          type={"text"}
          placeholder={"Имя"}
          value={form.name}
          onChange={onChange}
          name={"name"}
          error={false}
         
          errorText={"Ошибка"}
          size={"default"}
        />
        <EmailInput
          onChange={onChange}
          value={form.email}
          name={"email"}
          placeholder="E-mail"
        />
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={"password"}
        />
      </Form>
    </div>
  );
}
