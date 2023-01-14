import { ToastOptions } from "react-toastify";

export type NotifyType = "success" | "message" | "warning" | "error" | "info";

export type NotifyFunction = (options: NotifyOptions) => void;

export type UseNotification = () => { notify: NotifyFunction };

export interface NotifyOptions {
	title: string;
	description: string;
	type: NotifyType;
	options?: ToastOptions;
}
