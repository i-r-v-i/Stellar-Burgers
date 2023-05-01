import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/Form";
import { useState } from "react";
import { registrateUser } from "../../services/actions/user";
import { useNavigate } from "react-router-dom";
import { FC, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../services/types/hooks";

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.user.userData);
  const [form, setValue] = useState({ name: "", email: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target?.name]: e.target?.value });
    console.log(user);
  };

  const onSubmit = (e: SubmitEvent | FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registrateUser(form, navigate));
  };

  return (
    <div style={{ paddingTop: "180px" }}>
      <Form
        title="Регистрация"
        button
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        link="Войти"
        route="/login"
        onButtonClick={onSubmit}
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
};
export default Register;
