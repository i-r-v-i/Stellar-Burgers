import {
    Input,
    PasswordInput,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import Form from "../components/form/Form";
  import { useState, useRef } from "react";
  
  export default function ResetPassword() {
    const [value, setValue] = useState(null);
    const inputRef = useRef(null);
    const onIconClick = () => {
      setTimeout(() => inputRef.current.focus(), 0);
      alert("Icon Click Callback");
    };
    
  
    return (
      <Form title="Восстановление пароля" buttonText="Сохранить" question='Вспомнили пароль?' link='Войти'>
        <PasswordInput
          // onChange={onChange}
          value={value}
          name="password"
          placeholder="Введите новый пароль"
        />
        <Input
          type={"text"}
          placeholder='Введите код из письма' 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name={"name"}
          error={false}
          onIconClick={onIconClick}
          errorText="Ошибка"
          size="default"
        />
        
      </Form>
    );
  }