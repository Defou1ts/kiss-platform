import styles from "./Tag.module.css";
import cn from "classnames";
import { tagContent, TagProps } from "./Tag.props";

export const Tag = ({ tag, className, ...props }: TagProps) => {
	return (
		<div
			className={cn(className, styles.tag, styles[tag])}
			{...props}
		>
			{tagContent[tag]}
		</div>
	);
};
