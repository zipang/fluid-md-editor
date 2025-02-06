import { defineConfig } from "@pandacss/dev";
// Import the preset. The name can be anything you want
import typographyPreset from "pandacss-preset-typography";

export default defineConfig({
	outExtension: "js",

	// Whether to use css reset
	preflight: false,

	// Add JSX support for SolidJS
	jsxFramework: "solid",

	// Where to look for your css declarations
	include: ["src/**/*.{astro,js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	presets: [
		typographyPreset(),
		// Re-add the panda presets if you want to keep
		// the default keyframes, breakpoints, tokens
		// and textStyles provided by PandaCSS
		"@pandacss/dev/presets",
	],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
