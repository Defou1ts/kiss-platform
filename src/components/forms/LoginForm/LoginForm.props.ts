export interface ILoginForm {
	email: string;
	password: string;
	remember: boolean;
}

export interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}
