import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	size: "xs" | "s" | "l" | "xl";
	icon?: "arrow" | "share" | "none";
	appearance: "primary" | "ghost" | "delete";
}
