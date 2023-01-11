import { HProps } from "./H.props";

import cn from "classnames";
import styles from "./H.module.css";

export const H = ({ children, tag, weight = "normal", className, ...props }: HProps) => {
	switch (tag) {
		case "h1":
			return (
				<h1
					className={cn(className, styles.h1, styles[weight])}
					{...props}
				>
					{children}
				</h1>
			);
		case "h2":
			return (
				<h2
					className={cn(className, styles.h2, styles[weight])}
					{...props}
				>
					{children}
				</h2>
			);
		default:
			return <></>;
	}
};
