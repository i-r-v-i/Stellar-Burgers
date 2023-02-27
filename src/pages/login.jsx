import {
    EmailInput,
    PasswordInput,
    //   Button,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import Form from "../components/form/Form";
  import { useState, useRef } from "react";
  
  export default function Login() {
    const [form, setValue] = useState({ email: '', password: '' });
    // const inputRef = useRef(null);

    const onChange = e => {
      setValue({ ...form, [e.target.name]: e.target.value });
    };
  
  
    return (
      <Form title="Вход" buttonText="Войти" question='Вы — новый пользователь?' link='Зарегистрироваться' question2='Забыли пароль?' link2='Восстановить пароль' route='/register' route2='/forgot-password'>
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
  