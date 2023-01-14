import { SearchProps } from "./Search.props";
import React, { useState } from "react";

import cn from "classnames";
import styles from "./Search.module.css";

import { ReactComponent as SearchIcon } from "@icons/searchIcon.svg";

export const Search = ({ className, ...props }: SearchProps) => {
	const [value, setValue] = useState<string>("");

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className={styles.wrapper}>
			<input
				value={value}
				onChange={handleOnChange}
				className={cn(className, styles.search)}
				{...props}
			/>
			<SearchIcon className={styles.icon} />
		</div>
	);
};
