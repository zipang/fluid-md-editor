import { Match, splitProps, Switch, type Component } from "solid-js";
import { Eye, Pencil, type GenericIconProps } from ".";

export const Icon: Component<GenericIconProps> = (props) => {
	const [_, iconProps] = splitProps(props, ["name"]);

	return (
		<Switch fallback={null}>
			<Match when={props.name === "eye"}>
				<Eye {...iconProps} />
			</Match>
			<Match when={props.name === "pencil"}>
				<Pencil {...iconProps} />
			</Match>
		</Switch>
	);
};
