import { Button, H, P, Tag, TextField } from "@components";
import { ToastContainer } from "react-toastify";
import { useNotifications } from "@hooks";
import { NotifyType } from "types/notifications";

function App() {
	const { notify } = useNotifications();

	const showNotify = (type: NotifyType) => {
		notify({
			type,
			title: "Упешно!",
			description: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius molestias",
		});
	};

	return (
		<div className="App">
			<H tag="h1">Notifications:</H>
			<Button
				appearance="primary"
				size="xs"
				onClick={() => showNotify("success")}
			>
				test success
			</Button>
			<Button
				appearance="primary"
				size="xs"
				onClick={() => showNotify("message")}
			>
				test message
			</Button>
			<Button
				appearance="primary"
				size="xs"
				onClick={() => showNotify("warning")}
			>
				test warning
			</Button>
			<Button
				appearance="primary"
				size="xs"
				onClick={() => showNotify("error")}
			>
				test error
			</Button>
			<Button
				appearance="primary"
				size="xs"
				onClick={() => showNotify("info")}
			>
				test info
			</Button>
			<ToastContainer />
			<H tag="h1">Buttons:</H>

			<Button
				appearance="ghost"
				size="s"
			>
				ghost S
			</Button>
			<Button
				appearance="ghost"
				size="l"
			>
				ghost L
			</Button>
			<Button
				appearance="ghost"
				size="s"
				icon="arrow"
			>
				ghost S with icon
			</Button>
			<Button
				appearance="ghost"
				size="l"
				icon="share"
			>
				ghost L with icon
			</Button>
			<Button
				appearance="primary"
				size="xl"
			>
				primary XL
			</Button>
			<Button
				appearance="primary"
				size="xl"
				icon="arrow"
			>
				primary XL with icon
			</Button>
			<Button
				appearance="primary"
				size="xl"
				icon="share"
			>
				primary XL with icon
			</Button>
			<Button
				appearance="primary"
				size="xl"
				disabled
			>
				primary XL disabled
			</Button>
			<H tag="h1">Heading:</H>

			<H tag="h1">Tag h1</H>
			<H tag="h2">Tag h2</H>
			<H
				tag="h1"
				weight="bold"
			>
				Tag h1 bold
			</H>
			<H tag="h1">Tags:</H>

			<Tag tag="send" />
			<Tag tag="error" />
			<Tag tag="done" />
			<Tag tag="inProgress" />
			<H tag="h1">Paragraphs:</H>

			<P size="m">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cumque. SIZE M</P>
			<P size="s">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cumque. SIZE S</P>
			<P size="l">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cumque. SIZE L</P>
			<P size="xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cumque. SIZE XL</P>

			<TextField placeholder="E-mail" />
			<TextField placeholder="Name" />
			<TextField />
		</div>
	);
}

export default App;
