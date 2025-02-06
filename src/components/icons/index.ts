export interface IconProps {
	size?: number;
	color?: string;
}

export type IconName = "eye" | "pencil";

export interface GenericIconProps extends IconProps {
	name: IconName;
}

export { Pencil } from "./Pencil";
export { Eye } from "./Eye";
export { Icon } from "./Icon";
