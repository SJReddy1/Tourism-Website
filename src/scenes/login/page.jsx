import { useForm } from 'react-hook-form'
import styles from './login.module.css'
import * as zod from 'zod'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'

import { useRef } from 'react'
import { useUserContext } from '../../context/userContext'
import { FaRegEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";


const validationSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(8)
})

export const LoginPage = () => {
	

	const [showPassword, setShowPassword] = useState(false);
	const [passwordType, setPasswordType] = useState("password")
	const passswordHandler = () => {
		if(passwordType === "password"){
			setPasswordType("text")
		}else{
			setPasswordType("password")
		}
		setShowPassword(!showPassword);
	}


	const { register,  formState } = useForm({
		defaultValues: {
			email: '',
			password: ''
		},
		resolver: zodResolver(validationSchema)
	})

	const {loginUser} = useUserContext();
	const loginForm = useRef(null)
	const handleSubmit = async(e, data) => {
		e.preventDefault();
		const email = loginForm.current.email.value
		const password = loginForm.current.password.value
		const userInfo = {
			email,
			password
		}
		loginUser(userInfo);
	}

	return (
		<div className="container py-5">
			<div className={styles.loginForm}>
				<h4 className='fw-bold'>LOGIN</h4>
				<form onSubmit={handleSubmit} ref={loginForm} className='w-100 d-flex flex-column'>
					<div className="mb-3">
						<label for="email" className="form-label fw-bold">Email</label>
						<input type="email" className="form-control w-100" id="email" placeholder="name@example.com" {...register('email')} />
						<span className="text-danger">{formState.errors.email?.message}</span>
					</div>
					<div className="mb-3">
						<label for="password" className="form-label fw-bold">Password</label>
						<input type={`${passwordType}`} className="form-control" id="password" {...register('password')} />
						<div onClick={passswordHandler} className='position-absolute top-0 end-0'> 
						{ showPassword ? (<FaRegEye />) : (<GoEyeClosed />)}
						</div>
						<span className="text-danger">{formState.errors.password?.message}</span>
					</div>
					<button type="submit" className='m-auto'>
						{ "Submit"}
					</button>
				</form>
			</div>
		</div>
	)
}