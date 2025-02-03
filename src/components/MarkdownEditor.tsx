import EasyMDE from "easymde";
import { createEffect, createSignal } from "solid-js";
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
	theme: "easymde",
	toolbar: false,
};

export interface MarkdownEditorProps {
	content: string;
}

export const MarkdownEditor = ({ content }: MarkdownEditorProps) => {
	const [editor, setEditor] = createSignal<EasyMDE>();

	// Init
	createEffect(() => {
		setEditor(
			new EasyMDE({
				element: document.getElementById(
					"markdown-editor",
				) as HTMLElement,
				...MDE_DEFAULT_OPTIONS,
				initialValue: content,
			}),
		);
	});

	return <textarea id="markdown-editor" placeholder="Start writing..." />;
};
