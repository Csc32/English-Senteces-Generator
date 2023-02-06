import { defineConfig } from "astro/config";

// https://astro.build/config

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	integrations: [],
	output: "server",
	adapter: node({
		mode: "middleware",
	}),
});
