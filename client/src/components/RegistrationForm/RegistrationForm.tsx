import React from "react";
import {FormEvent, useState} from "react";
import styles from "./RegistrationForm.module.css";

export type RegistrationFormData = {
    login: string;
    password: string;
}

type FormProps = {
    onSubmit: (data: RegistrationFormData) => void;
}


export default function RegistrationForm({onSubmit}: FormProps){

    const [login, setLogin] = useState("");
    const [loginError, setLoginError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const isValid = ():Boolean => {
        let result = true;
        setLoginError("");

        if (!/^[a-z0-9]{6,20}$/.test(login)){
            setLoginError("Логин должен содержать латинские буквы и цифры от 6 символов!")
            result = false;
        }

        if (login.length ===0){
            setLoginError("Логин не может быть пустым!")
            result = false;
        }

        setPasswordError("");
        if (password.length === 0){
            setPasswordError("Пароль не может быть пустым!")
        }

        return result;
    }



    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isValid()) {
            onSubmit({
                login,
                password
            });
        }
    };

    return<>

        <form onSubmit={submitHandler}>
            <h3>Регистрация</h3>
        <label >
            Логин:
            <input
                value={login}
                onChange={e => setLogin(e.target.value)}
            />
        </label>
        <br/>
            {loginError && <div className={styles.error}>{loginError}</div>}
        <label>
            Пароль:
            <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"/>
        </label>
            <br/>
            {passwordError && <div className={styles.error}>{passwordError}</div>}
        <button type="submit">Зарегистрироваться</button>
        </form>
    </>;
}