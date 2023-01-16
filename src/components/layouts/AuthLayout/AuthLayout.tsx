import { AuthLayoutProps } from "./AuthLayout.props";
import { FunctionComponent } from "react";

import styles from "./AuthLayout.module.css";
import cn from "classnames";

export const AuthLayout = ({ children }: AuthLayoutProps) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export const withAuthLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withAuthLayoutComponent(props: T): JSX.Element {
		return (
			<AuthLayout>
				<Component {...props} />
			</AuthLayout>
		);
	};
};
