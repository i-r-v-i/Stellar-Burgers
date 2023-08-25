import {
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/Form";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { logIn } from "../../services/actions/user";
import { getUser } from "../../components/utils/constants";
import { useAppDispatch, useAppSelector } from "../../services/types/hooks";

 const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {previousRoute} = useAppSelector(getUser)

  const [form, setValue] = useState<{email: string, password: string}>({ email: "", password: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit:FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(logIn(form, navigate, previousRoute));
  };

  return (
    <div style={{ paddingTop: "180px" }}>
      <Form
        title="Вход"
        isButton={true}
        buttonText="Войти"
        question="Вы — новый пользователь?"
        link="Зарегистрироваться"
        question2="Забыли пароль?"
        link2="Восстановить пароль"
        route="/register"
        route2="/forgot-password"
        onSubmit={onSubmit}
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
}

export default Login;