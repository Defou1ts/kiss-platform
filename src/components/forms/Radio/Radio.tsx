import { RadioProps } from "./Radio.props";

import cn from "classnames";
import styles from "./Radio.module.css";

export const Radio = ({ value, checked, disabled, className, ...props }: RadioProps) => {
	return (
		<div className={styles.wrapper}>
			<div
				className={cn(className, styles.radioWrapper, {
					[styles.checked]: checked,
					[styles.disabled]: disabled,
				})}
			>
				<input
					className={styles.radio}
					type="radio"
					value={value}
					{...props}
					checked={checked && !disabled}
					disabled={disabled}
				/>
			</div>
			<span className={styles.value}>{value}</span>
		</div>
	);
};
