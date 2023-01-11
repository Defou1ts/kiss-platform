import { PProps } from "./P.props";

import cn from "classnames";
import styles from "./P.module.css";

export const P = ({ children, size, className, ...props }: PProps) => {
	return (
		<p
			className={cn(className, styles.p, {
				[styles.s]: size === "s",
				[styles.m]: size === "m",
				[styles.l]: size === "l",
				[styles.xl]: size === "xl",
			})}
			{...props}
		>
			{children}
		</p>
	);
};
