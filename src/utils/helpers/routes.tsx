import { FORGOT_PASSWORD_ROUTE, LOGIN_ROUTE, SIGN_UP_ROUTE } from "@utils";
import { IRoute } from "@types";
import { AuthPage } from "@pages";

export const unauthorizedRoutes: IRoute[] = [
	{
		path: SIGN_UP_ROUTE,
		Component: <AuthPage type="signup" />,
	},
	{
		path: LOGIN_ROUTE,
		Component: <AuthPage type="login" />,
	},
	{
		path: FORGOT_PASSWORD_ROUTE,
		Component: <></>,
	},
];

export const authorizedRoutes: IRoute[] = [];
