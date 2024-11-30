import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'my-primary': '#111',
				'my-accent': '#2f7c47',
				'my-opposite': '#EEE'
			}
		}
	},

	plugins: []
} satisfies Config;