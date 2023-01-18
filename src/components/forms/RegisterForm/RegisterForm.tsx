import { Controller, useForm } from "react-hook-form";
import { Button, Checkbox, TextField } from "@components";
import { IRegisterForm, RegisterFormProps } from "./RegisterForm.props";
import { useNotifications } from "@hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import cn from "classnames";
import styles from "./RegisterForm.module.css";

const schema = yup
	.object()
	.shape({
		email: yup.string().required("required").email("must be a valid email"),
		name: yup.string().required("required"),
		password: yup
			.string()
			.required("required")
			.min(8, "8 characters")
			.matches(/\d/, "1 number")
			.matches(/[A-Z]/, "1 capital case")
			.matches(/[a-z]/, "1 small case")
			.matches(/[^A-Za-z0-9]/, "1 special character!"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "must match")
			.required("required"),
		agreenment: yup.boolean().isTrue(),
	})
	.required();

export const RegisterForm = ({ className, ...props }: RegisterFormProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isDirty },
		reset,
	} = useForm<IRegisterForm>({
		resolver: yupResolver(schema, {
			abortEarly: false,
		}),
	});

	const { notify, ToastContainer } = useNotifications();

	const onSubmit = async (formData: IRegisterForm) => {
		console.log(formData);
		reset();
		notify({
			title: "Sign Up",
			description: "Great! You're successfully signed up!",
			type: "success",
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div
				className={cn(className, styles.form)}
				{...props}
			>
				<Controller
					control={control}
					name="email"
					rules={{ required: { value: true, message: "E-mail required" } }}
					defaultValue=""
					render={({ field }) => (
						<TextField
							value={field.value}
							onChange={field.onChange}
							placeholder="E-mail"
							error={errors.email}
							tabIndex={0}
							ref={field.ref}
						/>
					)}
				/>
				<Controller
					control={control}
					name="name"
					rules={{ required: { value: true, message: "name required" } }}
					defaultValue=""
					render={({ field }) => (
						<TextField
							value={field.value}
							onChange={field.onChange}
							placeholder="Name"
							error={errors.name}
							tabIndex={0}
							ref={field.ref}
						/>
					)}
				/>
				<Controller
					control={control}
					name="password"
					rules={{ required: { value: true, message: "password required" } }}
					defaultValue=""
					render={({ field }) => (
						<TextField
							value={field.value}
							onChange={field.onChange}
							placeholder="Password"
							error={errors.password}
							tabIndex={0}
							ref={field.ref}
						/>
					)}
				/>
				<Controller
					control={control}
					name="confirmPassword"
					rules={{ required: { value: true, message: "password required" } }}
					defaultValue=""
					render={({ field }) => (
						<TextField
							value={field.value}
							onChange={field.onChange}
							placeholder="Confirm Password"
							error={errors.confirmPassword}
							tabIndex={0}
							ref={field.ref}
						/>
					)}
				/>
				<div className={styles.options}>
					<Controller
						control={control}
						name="agreenment"
						defaultValue={false}
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<Checkbox
								onBlur={onBlur}
								onChange={onChange}
								checked={value}
								ref={ref}
								error={errors.agreenment}
							/>
						)}
					/>
					<span className={styles.remember}>I agree to the terms, conditions and Privacy Policy </span>
				</div>
				<Button
					appearance="primary"
					size="xl"
					disabled={!!Object.keys(errors).length || !isDirty}
				>
					Create an account
				</Button>
			</div>
			<ToastContainer />
		</form>
	);
};
