import { styled, type HTMLStyledProps } from "@styled-system/jsx";
import { splitProps, type Component, type JSX } from "solid-js";
import { Icon, type IconName } from "./icons";

export interface IconButtonProps extends HTMLStyledProps<"button"> {
	size?: number;
	name: IconName;
	onClick?: JSX.EventHandler<HTMLButtonElement, Event>;
}

const StyledButton = styled.button;

export const IconButton: Component<IconButtonProps> = (props) => {
	const [_, etc] = splitProps(props, ["size", "name"]);

	return (
		<StyledButton
			class={`toolbar-button ${props.name}`}
			width={props.size}
			height={props.size}
			{...etc}
		>
			<Icon name={props.name} size={props.size} />
		</StyledButton>
	);
};
