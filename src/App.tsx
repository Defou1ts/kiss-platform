import { IRoute } from "@types";
import { authorizedRoutes, NOT_FOUND_ROUTE, unauthorizedRoutes } from "@utils";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
	const user = false;

	const renderRoutes = (routes: IRoute[]) =>
		routes.map(({ path, Component }: IRoute) => (
			<Route
				key={path}
				path={path}
				element={Component}
			/>
		));

	const renderedUnauthorizedRoutes = renderRoutes(unauthorizedRoutes);
	const renderedAuthorizedRoute = renderRoutes(authorizedRoutes);

	const routes = user ? renderedAuthorizedRoute : renderedUnauthorizedRoutes;

	return (
		<Routes>
			{routes}
			<Route
				path="*"
				element={
					<Navigate
						to={NOT_FOUND_ROUTE}
						replace
					/>
				}
			/>
		</Routes>
	);
};
