import { SwitchProps } from "./Switch.props";

import styles from "./Switch.module.css";
import cn from "classnames";

export const Switch = ({ isActive, className, ...props }: SwitchProps) => {
	return (
		<div
			className={cn(className, styles.switch, {
				[styles.active]: isActive,
			})}
			{...props}
		>
			<div className={styles.round}></div>
		</div>
	);
};
