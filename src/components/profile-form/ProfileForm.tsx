import {
    Input,
    EmailInput,
    PasswordInput,
    Button,
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import Form from "../form/Form";
  import { useState, useRef, FC, ChangeEvent, FormEventHandler } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import styles from "./ProfileForm.module.css";
  import {
    setNewUserData,
    IS_CHANGING,
    STOP_CHANGING } from '../../services/actions/user';
import { getUser } from "../utils/constants";

  
  const ProfileForm: FC = () =>{
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const name= useSelector(getUser).userData?.name;
    const email = useSelector(getUser).userData?.email;
    const isChanging = useSelector(getUser).isChanging;
    const [user, changeValue] = useState({
      name: name,
      email: email,
      password: "",
    });
  
    const onIconClick = (ref: any) => {
      ref?.current?.focus();
      
    };
  
    const onChange = (e: ChangeEvent) => {
      dispatch({ type: IS_CHANGING });
      // changeValue({ ...user, [e.target]: e.target.value });
    };
  
    const canselChanging = () => {
      changeValue({ name: name, email: email, password: '' });
      dispatch({ type: STOP_CHANGING });
    };

  
    const onSubmit = (e: any) => {
      e.preventDefault();
      // dispatch(setNewUserData(user));
      changeValue({ ...user, password: "" });
      dispatch({ type: STOP_CHANGING });
    };
  
    return (
      <></>
      // <Form extraClass={styles.position} onButtonClick={() => onSubmit}>
      //     <Input
      //       type={"text"}
      //       placeholder={"Имя"}
      //       value={user.name}
      //       onChange={onChange}
      //       name={"name"}
      //       error={false}
      //       errorText={"Ошибка"}
      //       size={"default"}
      //       icon={"EditIcon"}
      //       ref={inputRef}
      //       onIconClick={() => onIconClick(inputRef)}
      //     />
      //     <EmailInput
      //       onChange={onChange}
      //       value={user.email}
      //       name={"email"}
      //       placeholder="E-mail"
      //       icon={"EditIcon"}
      //       required
      //     />
      //     <PasswordInput
      //       onChange={onChange}
      //       value={user.password}
      //       name={"password"}
      //       icon={"EditIcon"}
      //     />
      //     {isChanging && (
      //       <div className={styles.buttons}>
      //         <Button
      //           onClick={canselChanging}
      //           htmlType="button"
      //           type="secondary"
      //           size="medium"
      //           extraClass={styles.buttonSize}
      //         >
      //           Отмена
      //         </Button>
      //         <Button
      //           htmlType="submit"
      //           type="primary"
      //           size="medium"
                
      //         >
      //           Сохранить
      //         </Button>
      //       </div>
      //     )}
      //   </Form>
    );
  }
  
  export default ProfileForm;