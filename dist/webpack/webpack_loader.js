"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageEncodeLoader = ImageEncodeLoader;
const encode = require("sharp");
/** This function is the entry point for `image-encode-loader` */
function ImageEncodeLoader(resource) {
    const callback = this.async();
    const options = this.getOptions();
    const srcPath = this.resourcePath;
    const format = options.format;
    if (format == null) {
        // Skip the encoding process if the format is not provided.
        return callback(null, resource);
    }
    // Encodes a given image to a given format and call `callback` when encoding ended.
    encode(srcPath).toFormat(format).toBuffer((error, buffer) => {
        if (error) {
            callback(error, "Image encoder exception");
            throw new Error(`Image encoder exception: ${error.message}`);
        }
        callback(null, buffer);
    });
}
