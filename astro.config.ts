import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://astro-pico.netlify.app",
	integrations: [solid(), icon()],
	image: {
		domains: ["astro.build"],
		remotePatterns: [
			{
				protocol: "https",
			},
		],
	},
});
