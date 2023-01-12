import { TextFieldProps } from "./TextField.props";
import React, { ForwardedRef, forwardRef, useState } from "react";

import cn from "classnames";
import styles from "./TextField.module.css";

import { ReactComponent as ProblemIcon } from "@icons/problem.svg";

export const TextField = forwardRef(
	({ className, onChange, placeholder, ...props }: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
		const [value, setValue] = useState<string>("");

		const error = true;

		const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			onChange && onChange(e);
			setValue(e.target.value);
		};

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
					onChange={(e) => handleOnChange(e)}
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
