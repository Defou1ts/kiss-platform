import { CheckboxProps } from "./Checkbox.props";

import cn from "classnames";
import styles from "./Checkbox.module.css";

import { ReactComponent as CheckedIcon } from "@icons/checked.svg";
import { ReactComponent as InterminateIcon } from "@icons/interminate.svg";

export const Checkbox = ({ value, interminate = false, checked, disabled, className, ...props }: CheckboxProps) => {
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
				checked={(checked || interminate) && !disabled}
				disabled={disabled}
			/>
			{checked && !interminate && <CheckedIcon className={styles.icon} />}
			{interminate && <InterminateIcon className={styles.icon} />}
		</div>
	);
};
