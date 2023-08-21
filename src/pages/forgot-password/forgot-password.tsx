import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/Form";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword, SEND_EMAIL } from "../../services/actions/user";

 const ForgotPassword: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setEmail] = useState({ email: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail({ email: e.target.value });
  };

  const onSubmit: FormEventHandler<HTMLFormElement>  = (e) => {
    e.preventDefault();
    // dispatch(forgotPassword(form, navigate));
    dispatch({ type: SEND_EMAIL });
  };

  return (
    <div style={{ paddingTop: "180px" }}>
      <Form
        title="Восстановление пароля"
        isButton={true}
        buttonText="Восстановить"
        question="Вспомнили пароль?"
        link="Войти"
        route="/login"
        onSubmit={()=>onSubmit}
      >
        <EmailInput
          onChange={onChange}
          value={form.email}
          name={"email"}
          placeholder="Укажите e-mail"
          required
        />
      </Form>
    </div>
  );
}

export default ForgotPassword;