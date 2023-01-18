import { FORGOT_PASSWORD_ROUTE, LOGIN_ROUTE, NOT_FOUND_ROUTE, SIGN_UP_ROUTE } from "@utils";
import { IRoute } from "@types";
import { AuthPage } from "@pages";
import { Navigate } from "react-router-dom";

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
	{
		path: "*",
		Component: (
			<Navigate
				to={LOGIN_ROUTE}
				replace
			/>
		),
	},
];

export const authorizedRoutes: IRoute[] = [
	{
		path: "*",
		Component: (
			<Navigate
				to={NOT_FOUND_ROUTE}
				replace
			/>
		),
	},
];
