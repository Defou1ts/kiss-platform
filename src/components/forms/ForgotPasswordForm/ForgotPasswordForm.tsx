import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@components";
import { useNotifications } from "@hooks";
import { IForgotPasswordForm, ForgotPasswordFormProps } from "./ForgotPasswordForm.props";

import cn from "classnames";
import styles from "./ForgotPasswordForm.module.css";

export const ForgotPasswordForm = ({ setRecoverState, className, ...props }: ForgotPasswordFormProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isDirty },
		reset,
	} = useForm<IForgotPasswordForm>();

	const { notify } = useNotifications();

	const onSubmit = async (formData: IForgotPasswordForm) => {
		console.log(formData);
		reset();
		notify({
			title: "Code Send",
			description: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius molestias",
			type: "success",
		});
		setRecoverState("insert");
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

				<Button
					appearance="primary"
					size="xl"
					disabled={!!Object.keys(errors).length || !isDirty}
				>
					Send code
				</Button>
			</div>
		</form>
	);
};
