import { Box, type BoxProps as ToolbarProps } from "@components/Box";
import { type Component } from "solid-js";
import "./toolbar.scss";

export const Toolbar: Component<ToolbarProps> = ({ children }) => (
	<Box as="aside" id="floating-toolbar">
		{children}
	</Box>
);
