import { ToastOptions } from "react-toastify";
import { ToastContainer } from "react-toastify";

export type NotifyType = "success" | "message" | "warning" | "error" | "info";
export type NotifyFunction = (options: NotifyOptions) => void;

export type UseNotification = () => { notify: NotifyFunction; ToastContainer: typeof ToastContainer };

export interface NotifyOptions {
	title: string;
	description: string;
	type: NotifyType;
	options?: ToastOptions;
}
