import { LoginForm, withAuthLayout } from "@components";

const LoginPage = () => {
	return <LoginForm />;
};

export default withAuthLayout(LoginPage);
