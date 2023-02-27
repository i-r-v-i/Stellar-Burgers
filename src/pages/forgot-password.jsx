import {
    EmailInput,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import Form from "../components/form/Form";
  import { useState, useRef } from "react";
  
  export default function ForgotPassword() {
    const [value, setValue] = useState(null);
    const inputRef = useRef(null);
    const onIconClick = () => {
      setTimeout(() => inputRef.current.focus(), 0);
      alert("Icon Click Callback");
    };
    
    return (
      <Form title="Восстановление пароля" buttonText="Восстановить" question='Вспомнили пароль?' link='Войти'>
        <EmailInput
          // onChange={onChange}
          value={value}
          name={"email"}
          placeholder="Укажите e-mail"
        />
      </Form>
    );
  }