import {
	createComputed,
	createContext,
	createEffect,
	createSignal,
	on,
	type Accessor,
	type Setter,
} from "solid-js";
import EasyMDE from "easymde";
import { marked } from "marked";
import markedKatex from "marked-katex-extension";
import { MarkdownEditor } from "./MarkdownEditor";
import { Toolbar } from "./Toolbar";
import { IconButton } from "./IconButton";
import { prose } from "@styled-system/recipes";
import type { IconName } from "./icons";
import "./page-preview.scss";

export type EditorMode = "edit" | "preview";

const renderer = marked.use(markedKatex({})); // async: false ?

const renderMarkdown = (markdown = "") => renderer.parse(markdown) as string;

export interface PageContextProps {
	content: Accessor<string>;
	setContent: Setter<string>;
	mode: Accessor<EditorMode>;
	setMode: Setter<EditorMode>;
	editor: Accessor<EasyMDE | null>;
	setEditor: Setter<EasyMDE | null>;
}

export const PageContext = createContext<PageContextProps>();

export const PageWithPreview = () => {
	const [content, setContent] = createSignal("");
	const [mode, setMode] = createSignal<EditorMode>("edit");
	const [editor, setEditor] = createSignal<EasyMDE | null>(null);

	/**
	 * Compute the name of the toggle icon
	 */
	const name: () => IconName = () => (mode() === "edit" ? "eye" : "pencil");

	const togglePreview = () => {
		const _editor = editor();
		if (_editor === null) {
			return;
		}

		EasyMDE.togglePreview(_editor);

		if (mode() === "preview") {
			console.log(`Toggle to EDIT mode`);
			setMode("edit");
		} else {
			console.log(`Toggle to PREVIEW mode`);
			setMode("preview");
		}
	};

	return (
		<PageContext.Provider
			value={{ content, setContent, mode, setMode, editor, setEditor }}
		>
			<main>
				<article class={`${prose({ size: "lg" })} container ${mode()}`}>
					{document && (
						<MarkdownEditor
							content={content()}
							visible={mode() === "edit"}
						/>
					)}
					<div id="preview" innerHTML={renderMarkdown(content())} />
				</article>
				<Toolbar>
					<IconButton
						size={24}
						name={mode() === "edit" ? "eye" : "pencil"}
						onClick={togglePreview}
					/>
				</Toolbar>
			</main>
		</PageContext.Provider>
	);
};

export default PageWithPreview;
