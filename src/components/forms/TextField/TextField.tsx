import { TextFieldProps } from "./TextField.props";
import { ForwardedRef, forwardRef } from "react";

import cn from "classnames";
import styles from "./TextField.module.css";

import { ReactComponent as ProblemIcon } from "@icons/problem.svg";

export const TextField = forwardRef(
	({ error, value, className, placeholder, ...props }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
		return (
			<div className={cn(className, styles.inputWrapper)}>
				<div
					className={cn(styles.floating, {
						[styles.floatingActive]: value,
						[styles.floatingError]: error,
					})}
				>
					{placeholder}
				</div>
				<input
					value={value}
					ref={ref}
					className={cn(styles.input, {
						[styles.error]: error,
					})}
					placeholder={placeholder}
					{...props}
				/>
				{error && <ProblemIcon className={styles.errorIcon} />}
			</div>
		);
	}
);
