import {
  Input,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/Form";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { registrateUser } from "../../services/actions/user";
import { useNavigate } from "react-router-dom";
import { useAppDispatch} from "../../services/types/hooks";
import { TUserData } from "../../services/types/user";

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form, setValue] = useState({ name: "", email: "", password: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(registrateUser(form, navigate));
  };

  return (
    <div style={{ paddingTop: "180px" }}>
      <Form
        title="Регистрация"
        route2=""
        isButton={true}
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        link="Войти"
        route="/login"
        onSubmit={onSubmit}
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
        <PasswordInput onChange={onChange} value={form.password} name={"password"} />
      </Form>
    </div>
  );
};
export default Register;
