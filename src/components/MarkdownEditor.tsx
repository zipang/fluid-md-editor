import EasyMDE from "easymde";
import { createEffect, useContext } from "solid-js";
import { PageContext } from "./PageWithPreview";
import "easymde/dist/easymde.min.css";
import "./markdown-editor.css";

const MDE_DEFAULT_OPTIONS = {
	autoDownloadFontAwesome: false,
	autofocus: true,
	autosave: {
		enabled: true,
		delay: 10000,
		submit_delay: 10000,
		uniqueId: "fluid-md-editor",
		text: "Saving..",
	},
	blockStyles: {
		bold: "**",
		code: "```",
		italic: "_",
	},
	nativeSpellcheck: false,
	theme: "easymde",
	toolbar: false,
};

export interface MarkdownEditorProps {
	content: string;
	visible: boolean;
}

export const MarkdownEditor = ({ content = "" }: MarkdownEditorProps) => {
	const { setEditor } = useContext(PageContext) || {};

	// Init
	createEffect(() => {
		const editor = new EasyMDE({
			element: document.getElementById("markdown-editor") as HTMLElement,
			...MDE_DEFAULT_OPTIONS,
			initialValue: content,
		});

		if (setEditor) {
			console.log(`Sharing the editor instance with parent context`);
			setEditor(editor);
		}
	});

	return <textarea id="markdown-editor" placeholder="Start writing..." />;
};
