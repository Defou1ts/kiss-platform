import { AuthLayoutProps } from "./AuthLayout.props";
import { FunctionComponent } from "react";
import { P } from "@components";

import styles from "./AuthLayout.module.css";

import { ReactComponent as AuthBackground } from "@images/authBackground.svg";
import { AuthPageProps } from "pages/AuthPage/AuthPage.props";

export const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.authBlock}>{children}</div>
			<div className={styles.bgBlock}>
				<AuthBackground className={styles.bg} />
				<P
					size="xl"
					className={styles.bgTitle}
				>
					Revolutionizing the patent market
				</P>
				<P
					size="s"
					className={styles.bgText}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
				</P>
			</div>
		</div>
	);
};

export const withAuthLayout = <T extends Record<string, unknown> | AuthPageProps>(Component: FunctionComponent<T>) => {
	return function withAuthLayoutComponent(props: T): JSX.Element {
		return (
			<AuthLayout>
				<Component {...props} />
			</AuthLayout>
		);
	};
};
