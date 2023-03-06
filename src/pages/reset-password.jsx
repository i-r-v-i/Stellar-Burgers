import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../components/form/Form";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { setNewPassword } from "../services/actions/user"; 
 
export default function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setValue] = useState({password: '', token: ''});
  
const onChange = e => {
  setValue({...form, [e.target.name]: e.target.value});
}

console.log(form);
const onSubmit = (e) => {
  e.preventDefault();
  dispatch(setNewPassword(form, navigate));
}

  return (
    <div style={{ paddingTop: "180px" }}>
      <Form
        title="Восстановление пароля"
        button='true'
        buttonText="Сохранить"
        question="Вспомнили пароль?"
        link="Войти"
        route='/login'
        onButtonClick={onSubmit}
      >
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name="password"
          placeholder="Введите новый пароль"
          required
          
        />
        <Input
          type={"text"}
          placeholder="Введите код из письма"
          value={form.token}
          onChange={onChange}
          name="token"
          // error={false}
          // errorText="Ошибка"
          size="default"
          required
        />
      </Form>
    </div>
  );
}
