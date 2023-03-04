import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../components/form/Form";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../services/actions/user";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setEmail] = useState({email: ''});



  const onChange = (e) => {
    setEmail({email: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(form, navigate));
    
  };

  return (
    <div style={{ paddingTop: "180px" }}>
      <Form
        title="Восстановление пароля"
        button='true'
        buttonText="Восстановить"
        question="Вспомнили пароль?"
        link="Войти"
        route='/login'
        onButtonClick={onSubmit}
      >
        <EmailInput
          onChange={onChange}
          value={form.email}
          name={"email"}
          placeholder="Укажите e-mail"
          required />
      </Form>
    </div>
  );
}
