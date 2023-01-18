import { FieldError } from "react-hook-form";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	interminate?: boolean;
	error?: FieldError;
}
