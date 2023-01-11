import { ButtonProps } from "./Button.props";

import cn from "classnames";
import styles from "./Button.module.css";

import { ReactComponent as ShareIcon } from "@icons/share.svg";
import { ReactComponent as ArrowIcon } from "@icons/arrowRight.svg";

export const Button = ({ children, size, icon = "none", appearance, disabled, className, ...props }: ButtonProps) => {
	const renderIcon = () => {
		switch (icon) {
			case "arrow":
				return <ArrowIcon className={cn(styles.icon)} />;
			case "share":
				return <ShareIcon className={cn(styles.icon)} />;
			default:
				return null;
		}
	};

	const renderedIcon = renderIcon();

	return (
		<button
			className={cn(className, styles.button, styles[size], {
				[styles.primary]: appearance === "primary",
				[styles.ghost]: appearance === "ghost",
				[styles.delete]: appearance === "delete",
				[styles.disabled]: disabled,
			})}
			{...props}
		>
			{children}
			{renderedIcon}
		</button>
	);
};
