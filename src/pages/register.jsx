import {
  Input,
  EmailInput,
  PasswordInput,
  //   Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../components/form/Form";
import { useState, useRef } from "react";

export default function Register() {
  const [form, setValue] = useState({name: '', email: '', password: '' });
  // const inputRef = useRef(null);
  // const onIconClick = () => {
  //   setTimeout(() => inputRef.current.focus(), 0);
  //   alert("Icon Click Callback");
  // };
  
  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <Form title="Регистрация" buttonText="Зарегистрироваться" question='Уже зарегистрированы?' link='Войти' route='/login'>
      <Input
        type={"text"}
        placeholder={"Имя"}
        value={form.name}
        onChange={onChange}
        name={"name"}
        error={false}
        // onIconClick={onIconClick}
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
  );
}
