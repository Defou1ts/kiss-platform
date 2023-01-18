import { ForgotPasswordForm, P } from "@components";
import { useState } from "react";

import styles from "./ForgotPasswordPage.module.css";
import { RecoverState } from "@types";
import { useNotifications } from "@hooks";

import { ReactComponent as Logo } from "@images/LogoVar1.svg";

export const ForgotPasswordPage = () => {
	const [recoverState, setRecoverState] = useState<RecoverState>("forgot");

	const getCurrentForm = (recoverState: RecoverState) => {
		switch (recoverState) {
			case "forgot":
				return <ForgotPasswordForm setRecoverState={setRecoverState} />;
			case "insert":
				return <></>;
			case "change":
				return <></>;
		}
	};
	const { ToastContainer } = useNotifications();
	const form = getCurrentForm(recoverState);

	return (
		<div className={styles.wrapper}>
			<Logo className={styles.logo} />
			<P
				size="l"
				className={styles.text}
			>
				Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias
			</P>
			{form}
			<ToastContainer />
		</div>
	);
};
