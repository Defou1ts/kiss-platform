import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Checkbox, TextField } from "@components";
import { FORGOT_PASSWORD_ROUTE } from "@utils";
import { ILoginForm, LoginFormProps } from "./LoginForm.props";

import cn from "classnames";
import styles from "./LoginForm.module.css";

export const LoginForm = ({ className, ...props }: LoginFormProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isDirty },
		reset,
	} = useForm<ILoginForm>();

	const onSubmit = async (formData: ILoginForm) => {
		console.log(formData);
		reset();
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
					name="password"
					rules={{ required: { value: true, message: "Password required" } }}
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
				<Button
					appearance="primary"
					size="xl"
					disabled={!!Object.keys(errors).length || !isDirty}
				>
					Login
				</Button>
				<div className={styles.options}>
					<Controller
						control={control}
						name="remember"
						defaultValue={false}
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<Checkbox
								onBlur={onBlur}
								onChange={onChange}
								checked={value}
								ref={ref}
							/>
						)}
					/>
					<span className={styles.remember}>Remember me</span>
					<Link
						to={FORGOT_PASSWORD_ROUTE}
						className={styles.link}
					>
						Forgot Password?
					</Link>
				</div>
			</div>
		</form>
	);
};
