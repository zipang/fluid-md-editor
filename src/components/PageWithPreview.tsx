import { createSignal } from "solid-js";
import { marked } from "marked";
import markedKatex from "marked-katex-extension";
import { MarkdownEditor } from "./MarkdownEditor";
import { Toolbar } from "./Toolbar";
import { Icon } from "astro-icon/components";
import "./page-preview.scss";

export type EditorMode = "edit" | "preview";

const renderer = marked.use(markedKatex({ async: false }));

const renderMarkdown = (markdown = "") => renderer.parse(markdown) as string;

export const PageWithPreview = () => {
	const [content, setContent] = createSignal("");
	const [mode, setMode] = createSignal<EditorMode>("edit");

	const togglePreview = () => {
		if (mode() === "preview") {
			console.log(`Toggle to EDIT mode`);
			setMode("edit");
		} else {
			setMode("preview");
			console.log(`Toggle to PREVIEW mode`);
		}
	};

	return (
		<main on:click={togglePreview}>
			<article class={`container ${mode()}`}>
				<MarkdownEditor content={content()} />
				<div id="preview" innerHTML={renderMarkdown(content())} />
			</article>
			<Toolbar>X</Toolbar>
			<Icon
				name="edit-pen"
				size={48}
				style={{ top: "2rem", right: "2rem" }}
			/>
		</main>
	);
};

export default PageWithPreview;
