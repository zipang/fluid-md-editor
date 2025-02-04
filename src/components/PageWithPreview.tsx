import {
	createContext,
	createSignal,
	type Accessor,
	type Setter,
} from "solid-js";
import EasyMDE from "easymde";
import { marked } from "marked";
import markedKatex from "marked-katex-extension";
import { MarkdownEditor } from "./MarkdownEditor";
import { Toolbar } from "./Toolbar";
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

	const togglePreview = () => {
		editor()?.togglePreview();
		if (mode() === "preview") {
			console.log(`Toggle to EDIT mode`);
			setMode("edit");
		} else {
			setMode("preview");
			console.log(`Toggle to PREVIEW mode`);
		}
	};

	return (
		<PageContext.Provider
			value={{ content, setContent, mode, setMode, editor, setEditor }}
		>
			<main on:click={togglePreview}>
				<article class={`prose container ${mode()}`}>
					<MarkdownEditor
						content={content()}
						visible={mode() === "edit"}
					/>
					<div id="preview" innerHTML={renderMarkdown(content())} />
				</article>
			</main>
			<Toolbar>X</Toolbar>
		</PageContext.Provider>
	);
};

export default PageWithPreview;
