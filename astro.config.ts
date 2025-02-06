import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import pandaCSS from "@pandacss/dev/postcss";
import dynamicImport from "vite-plugin-dynamic-import";

// https://astro.build/config
export default defineConfig({
	site: "https://fluid-editor.app",

	integrations: [
		solid(),
		// icon({
		// 	svgoOptions: {
		// 		plugins: [
		// 			{
		// 				name: "preset-default",
		// 				params: {
		// 					overrides: {
		// 						removeViewBox: false,
		// 					},
		// 				},
		// 			},
		// 		],
		// 	},
		// }),
	],

	experimental: {
		svg: true,
	},

	image: {
		domains: ["astro.build"],
		remotePatterns: [
			{
				protocol: "https",
			},
		],
	},

	vite: {
		resolve: {
			alias: {
				"@assets": "/src/assets",
				"@components": "/src/components",
				"@layouts/*": "src/layouts/*",
				"@styled-system": "/styled-system",
			},
		},
		plugins: [dynamicImport({})],
		css: {
			postcss: {
				plugins: [pandaCSS],
			},
		},
		build: {
			target: "esnext",
		},
	},
});
