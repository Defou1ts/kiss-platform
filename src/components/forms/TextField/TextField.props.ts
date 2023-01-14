import { FieldError } from "react-hook-form";

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: FieldError;
}
