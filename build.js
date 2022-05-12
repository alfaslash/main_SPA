const esbuild = require("esbuild");

esbuild
	.build({
		entryPoints: ["./src/index.tsx"],
		bundle: true,
		outfile: "./public/bundle.js",
		watch: {
			onRebuild(error) {
				if (error) {
						console.error('watch build failed:', error);
					} else {
						console.log('watch build succeeded');
					}
				},
			},
	})
	.then(() => {
		console.log('watching...')
	})
	.catch((e) => console.error(e.message));
