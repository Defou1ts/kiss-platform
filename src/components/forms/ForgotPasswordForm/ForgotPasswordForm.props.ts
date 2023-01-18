import { RecoverState } from "@types";

export interface IForgotPasswordForm {
	email: string;
}

export interface ForgotPasswordFormProps extends React.HTMLAttributes<HTMLDivElement> {
	setRecoverState: (recoverState: RecoverState) => void;
}
