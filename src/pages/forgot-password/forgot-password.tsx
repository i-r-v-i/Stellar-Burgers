import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/Form";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { forgotPassword, SEND_EMAIL } from "../../services/actions/user";
import { useAppDispatch } from "../../services/types/hooks";

 const ForgotPassword: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form, setEmail] = useState({ email: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail({ email: e.target.value });
  };

  const onSubmit: FormEventHandler  = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(form, navigate));
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
        route2=''
        onSubmit={onSubmit}
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