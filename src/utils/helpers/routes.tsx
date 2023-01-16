import { FORGOT_PASSWORD_ROUTE, LOGIN_ROUTE, SIGN_UP_ROUTE } from "@utils";
import { IRoute } from "@types";
import { LoginPage } from "@pages";

export const unauthorizedRoutes: IRoute[] = [
	{
		path: SIGN_UP_ROUTE,
		Component: <></>,
	},
	{
		path: LOGIN_ROUTE,
		Component: <LoginPage />,
	},
	{
		path: FORGOT_PASSWORD_ROUTE,
		Component: <></>,
	},
];

export const authorizedRoutes: IRoute[] = [];
