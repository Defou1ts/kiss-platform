export interface IRegisterForm {
	email: string;
	name: string;
	password: string;
	confirmPassword: string;
	agreenment: boolean;
}

export interface RegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}
