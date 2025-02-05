import { type Component } from "solid-js";
import {
	Box as StyledBox,
	type BoxProps as StyledBoxProps,
} from "@styled-system/jsx";

/**
 * Box props (applicable to block-like elements)
 */
export interface BoxProps extends StyledBoxProps {
	/**
	 * Limit the usage of Box _as_ to these natural block elements
	 */
	as?:
		| "div"
		| "main"
		| "section"
		| "article"
		| "header"
		| "footer"
		| "nav"
		| "aside";
}

export const Box = StyledBox as Component<BoxProps>;
