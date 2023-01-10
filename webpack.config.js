import path from "path";

module.exports = {
	resolve: {
		extensions: ["js", "ts", "tsx"],
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "src/components"),
			// ...etc
		},
	},
};
