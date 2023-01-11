import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tag: "send" | "inProgress" | "done" | "error";
}

export const tagContent = {
	send: "Send",
	inProgress: "In Progress",
	done: "Done",
	error: "Error",
};
