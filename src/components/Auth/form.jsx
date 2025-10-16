import clases from './form.module.css';
import MInput from '../global/MInput';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


const fieldsSchema = yup.object()
    .shape({
        login: yup.string()
            .matches(/^[\w_]*$/, 'Неверный логин. Допустимые символы: буквы, цифры и нижнее подчёркивание')
            .min(3, 'Неверный логин. Должно быть не меньше 3 символов')
            .max(20, 'Неверный логин. Должно быть не больше 20 символов'),
        pass: yup.string()
        .matches(/^[\w_]*$/, 'Неверный пароль. Допустимые символы: буквы, цифры и нижнее подчёркивание')
            .min(3, 'Неверный пароль. Должно быть не меньше 3 символов')
            .max(8, 'Неверный пароль. Должно быть не больше 8 символов'),
        confirm: yup.string()
        .matches(/^[\w_]*$/, 'Неверный пароль. Допустимые символы: буквы, цифры и нижнее подчёркивание')
            .min(3, 'Неверный пароль. Должно быть не меньше 3 символов')
            .max(8, 'Неверный пароль. Должно быть не больше 8 символов'),
    });

const form = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            login: '',
            pass: '',
            confirm: ''
        },
        resolver: yupResolver(fieldsSchema),
    });
    const loginError = errors.login?.message;
    const passError = errors.pass?.message;
    const confirmError = errors.confirm?.message;

    function sendForm(form) {
        console.log(form);
    }
	return (
		<form className={clases.form} onSubmit={handleSubmit(sendForm)}>
            {errors.login && <span className="text-red-600">{errors.login.message}</span>}
			<Controller name="login" control={control} render={({ field }) => <MInput label="login" {...field} />} />

			{errors.pass && <span className="text-red-600">{errors.pass.message}</span>}
			<Controller name="pass" control={control} render={({ field }) => <MInput label="password" {...field} />} />

			{errors.confirm && <span className="text-red-600">{errors.confirm.message}</span>}
			<Controller name="confirm" control={control} render={({ field }) => <MInput label="confirm password" {...field} />} />

			<button type="submit" className="w-full h-[43px] bg-indigo-600 text-white rounded">
				Войти
			</button>
		</form>
	);
};
export default form;
