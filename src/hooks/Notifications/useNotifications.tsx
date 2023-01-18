import { toast, ToastOptions, ToastContainer } from "react-toastify";
import { NotifyType, NotifyOptions, NotifyFunction, UseNotification } from "@types";

import { ReactComponent as SuccessIcon } from "@icons/checkCircleIcon.svg";
import { ReactComponent as MessageIcon } from "@icons/message.svg";
import { ReactComponent as WarningIcon } from "@icons/alert.svg";
import { ReactComponent as ErrorIcon } from "@icons/error.svg";
import { ReactComponent as InfoIcon } from "@icons/information.svg";

import styles from "./useNotifications.module.css";

export const useNotifications: UseNotification = () => {
	const defaultOptions: ToastOptions = {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "colored",
	};

	const getIcon = (type: NotifyType): React.FunctionComponent<React.SVGProps<SVGSVGElement>> => {
		switch (type) {
			case "success":
				return SuccessIcon;
			case "message":
				return MessageIcon;
			case "warning":
				return WarningIcon;
			case "error":
				return ErrorIcon;
			case "info":
				return InfoIcon;
			default:
				throw new Error("Invalid type of notify icon");
		}
	};

	const notify: NotifyFunction = ({ title, description, options, type }: NotifyOptions) => {
		const Icon = getIcon(type);
		if (type === "message") {
			toast(
				<>
					<p className={styles.title}>{title}</p>
					<p className={styles.description}>{description}</p>
				</>,
				{
					...defaultOptions,
					icon: <Icon className={styles.icon} />,
					...options,
				}
			);
		} else {
			toast[type](
				<>
					<p className={styles.title}>{title}</p>
					<p className={styles.description}>{description}</p>
				</>,
				{
					...defaultOptions,
					icon: <Icon className={styles.icon} />,
					...options,
				}
			);
		}
	};

	return { notify, ToastContainer };
};
