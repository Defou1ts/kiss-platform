const path = require("path");
module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@types": path.resolve(__dirname, "src/types"),
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@services": path.resolve(__dirname, "src/services"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@store": path.resolve(__dirname, "src/store"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@styles": path.resolve(__dirname, "src/assets/styles"),
			"@images": path.resolve(__dirname, "src/assets/images"),
			"@icons": path.resolve(__dirname, "src/assets/icons"),
		},
	},
};
