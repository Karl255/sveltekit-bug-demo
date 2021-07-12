import preprocess from "svelte-preprocess";
import staticAdapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
		adapter: staticAdapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

    preprocess: [preprocess({})]
};

export default config;
