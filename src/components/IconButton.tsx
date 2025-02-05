import { styled, type HTMLStyledProps } from "@styled-system/jsx";
import { lazy, Suspense, type Component, type JSX } from "solid-js";

const icons = {
	"edit-pen": lazy(() => import("@components/icons/EditPen")),
	"preview-eye": lazy(() => import("@components/icons/PreviewEye")),
} as const;

export interface IconButtonProps extends HTMLStyledProps<"button"> {
	size?: number;
	name: keyof typeof icons;
	onClick: JSX.EventHandler<HTMLButtonElement, Event>;
}

const StyledButton = styled.button;

export const IconButton: Component<IconButtonProps> = ({
	size = 32,
	name = "edit-pen",
	onClick,
	...more
}) => {
	const Icon = icons[name];
	return (
		<StyledButton
			class="toolbar-button"
			width={size}
			height={size}
			onClick={onClick}
			{...more}
		>
			<Suspense fallback="X">
				<Icon size={size} />
			</Suspense>
		</StyledButton>
	);
};
