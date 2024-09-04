import { LoaderContext } from "webpack";
import * as encode from "sharp";

/** Signature for the interface that defines options for `image-encode-loader` */
export interface EncodeLoaderOptions {
    format: "webp" | "avif" | "tiff" | "heif" | "jpeg" | "png" | "gif";
}

/** This function is the entry point for `image-encode-loader` */
export function ImageEncodeLoader(this: LoaderContext<EncodeLoaderOptions>, resource: Buffer) {
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
    })
}