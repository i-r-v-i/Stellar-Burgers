import {
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/Form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { logIn } from "../../services/actions/user";
import { FC, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../services/types/hooks";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const previousRoute = useAppSelector((store) => store.user.previousRoute);

  const [form, setValue] = useState({ email: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target?.name]: e.target?.value });
  };

  const onSubmit = (e: SubmitEvent | FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(logIn(form, navigate, previousRoute));
  };

  return (
    <div style={{ paddingTop: "180px" }}>
      <Form
        title="Вход"
        button
        buttonText="Войти"
        question="Вы — новый пользователь?"
        link="Зарегистрироваться"
        question2="Забыли пароль?"
        link2="Восстановить пароль"
        route="/register"
        route2="/forgot-password"
        onButtonClick={onSubmit}
      >
        <EmailInput
          onChange={onChange}
          value={form.email}
          name="email"
          placeholder="E-mail"
        />
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name="password"
        />
      </Form>
    </div>
  );
};

export default Login;
