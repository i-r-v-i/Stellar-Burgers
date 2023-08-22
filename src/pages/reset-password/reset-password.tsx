import { Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import Form from "../../components/form/Form";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { setNewPassword } from "../../services/actions/user";
import { Navigate } from "react-router-dom";
import { getUser } from "../../components/utils/constants";
import { useAppDispatch, useAppSelector } from "../../services/types/hooks";

const ResetPassword: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isReset } = useAppSelector(getUser);
  console.log(isReset);

  const [form, setValue] = useState<{ password: string; token: string }>({
    password: "",
    token: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(setNewPassword(form, navigate));
  };

  return isReset ? (
    <div style={{ paddingTop: "180px" }}>
      <Form
        title="Восстановление пароля"
        isButton={true}
        buttonText="Сохранить"
        question="Вспомнили пароль?"
        link="Войти"
        route="/login"
        route2=""
        onSubmit={() => onSubmit}
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
          size="default"
          required
        />
      </Form>
    </div>
  ) : (
    <Navigate to="/forgot-password" />
  );
};

export default ResetPassword;
