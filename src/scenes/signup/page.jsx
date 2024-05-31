import { useForm } from 'react-hook-form'
import { FaRegEye } from "react-icons/fa";
import styles from './signup.module.css'
import { GoEyeClosed } from "react-icons/go";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUpMutation } from '../../api/mutation/auth'
import { queryClient } from '../../api/query-client'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { ID, account } from '../../appwrite/appwriteConfig'
import { useUserContext } from '../../context/userContext';

const validationSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(8),
	name: zod.string()
})


export const SignUpPage = () => {

	const registerForm = useRef(null);

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
			password: '',
			name: ''
		},
		resolver: zodResolver(validationSchema)
	})


	const {signupUser} = useUserContext()
	const onSubmit = (e) => {
		e.preventDefault();
		const email = registerForm.current.email.value
		const password = registerForm.current.password.value
		const name = registerForm.current.name.value

		const userInfo = {
			email,
			password,
			name
		}
		signupUser(userInfo);
	}

	return (
		<div className="container py-5">
			<div className={styles.signUpForm}>
				<h4 className='fw-bold'>SIGN UP</h4>
				<form onSubmit={onSubmit} ref={registerForm} className='w-100 d-flex flex-column'>
					<div className="mb-3">
						<label for="name" className="form-label fw-bold">Name</label>
						<input type="text" className="form-control w-100" id="name" placeholder="Jon Doe" {...register('name')} />
						<span className="text-danger">{formState.errors.name?.message}</span>
					</div>
					<div className="mb-3">
						<label for="email" className="form-label fw-bold">Email</label>
						<input type="email" className="form-control w-100" id="email" placeholder="name@example.com" {...register('email')} />
						<span className="text-danger">{formState.errors.email?.message}</span>
					</div>
					<div className="mb-3 position-relative">
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