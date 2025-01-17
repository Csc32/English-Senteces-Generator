/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				"dark-navy": "#0a192f",
			},
		},
		fontFamily: {
			title: ["Monserrat"],
			text: ["Merriwether Black"],
		},
	},
	plugins: [],
};
