import { Button } from "@components";
import { ToastContainer } from "react-toastify";
import { useNotifications } from "@hooks";
import { NotifyType } from "types/notifications";

function App() {
	const { notify } = useNotifications();

	const showNotify = (type: NotifyType) => {
		notify({
			type,
			title: "Default",
			description: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius molestias",
		});
	};

	return (
		<div className="App">
			<Button
				appearance="primary"
				size="xs"
				onClick={() => showNotify("success")}
			>
				success
			</Button>
			<Button
				appearance="primary"
				size="xs"
				onClick={() => showNotify("message")}
			>
				message
			</Button>
			<Button
				appearance="primary"
				size="xs"
				onClick={() => showNotify("warning")}
			>
				warning
			</Button>
			<Button
				appearance="primary"
				size="xs"
				onClick={() => showNotify("error")}
			>
				error
			</Button>
			<Button
				appearance="primary"
				size="xs"
				onClick={() => showNotify("info")}
			>
				info
			</Button>
			<ToastContainer />
		</div>
	);
}

export default App;
