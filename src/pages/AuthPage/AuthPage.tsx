import { Link } from "react-router-dom";
import { LoginForm, P, RegisterForm, withAuthLayout } from "@components";
import { LOGIN_ROUTE, SIGN_UP_ROUTE } from "@utils";
import { AuthPageProps } from "./AuthPage.props";

import styles from "./AuthPage.module.css";
import cn from "classnames";

import { ReactComponent as Logo } from "@images/LogoVar1.svg";

const AuthPage = ({ type }: AuthPageProps) => {
	const questionText = type === "login" ? "Don't you have an account?" : "You have an account?";
	const linkHref = type === "login" ? SIGN_UP_ROUTE : LOGIN_ROUTE;
	const linkText = type === "login" ? "Create an account" : "Login";
	const form = type === "login" ? <LoginForm /> : <RegisterForm />;

	return (
		<>
			<div className={styles.question}>
				<P
					size="l"
					className={styles.text}
				>
					{questionText}
				</P>
				<Link
					to={linkHref}
					className={styles.link}
				>
					{linkText}
				</Link>
			</div>
			<Logo className={styles.logo} />
			<P
				size="l"
				className={cn(styles.text, styles.info)}
			>
				Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
			</P>
			{form}
		</>
	);
};

export default withAuthLayout<AuthPageProps>(AuthPage);
