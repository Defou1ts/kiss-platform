import { CheckboxProps } from "./Checkbox.props";

import cn from "classnames";
import styles from "./Checkbox.module.css";

import { ReactComponent as CheckedIcon } from "@icons/checked.svg";
import { ReactComponent as InterminateIcon } from "@icons/interminate.svg";
import { ForwardedRef, forwardRef } from "react";

export const Checkbox = forwardRef(
	(
		{ value, interminate = false, checked, disabled, className, ...props }: CheckboxProps,
		ref: ForwardedRef<HTMLInputElement>
	) => {
		return (
			<div
				className={cn(className, styles.wrapper, {
					[styles.checked]: checked,
					[styles.disabled]: disabled,
					[styles.interminate]: interminate,
				})}
			>
				<input
					className={styles.checkbox}
					type="checkbox"
					{...props}
					defaultChecked={(checked || interminate) && !disabled}
					disabled={disabled}
					ref={ref}
				/>
				{checked && !interminate && <CheckedIcon className={styles.icon} />}
				{interminate && <InterminateIcon className={styles.icon} />}
			</div>
		);
	}
);
