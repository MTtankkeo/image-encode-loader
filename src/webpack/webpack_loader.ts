import { LoaderContext } from "webpack";
import * as encode from "sharp";
import * as path from "path";

/** Signature for the interface that defines options for `image-encode-loader` */
export interface EncodeLoaderOptions {
    format: "webp" | "avif" | "tiff" | "heif" | "jpeg" | "png" | "gif";
    generator: {
        filename: string; // images/[name].[ext]
    },
}

/** This function is the entry point for `image-encode-loader` */
export function ImageEncodeLoader(this: LoaderContext<EncodeLoaderOptions>, resource: Buffer) {
    const callback = this.async();
    const options = this.getOptions();
    const srcPath = this.resourcePath;
    const format = options.format;

    // Skip the encoding process if the format is not provided.
    if (format == null) {
        return outputImageWith(this, resource);
    }

    // Encodes a given image to a given format and call `callback` when encoding ended.
    encode(srcPath).toFormat(format).toBuffer((error, buffer) => {
        if (error) {
            callback(error, "Image encoder exception");
            throw new Error(`Image encoder exception: ${error.message}`);
        }

        // Emits a file for converted image output.
        outputImageWith(this, buffer)
    });
}

/**
 * Emits a file for converted image output.
 * And, Returns the path to the newly emitted file as a JavaScript module export.
 */
export function outputImageWith(self: LoaderContext<EncodeLoaderOptions>, resource: Buffer) {
    const options = self.getOptions();
    const generator = options.generator;
    const filename = generator.filename;
    const format = options.format;

    // Skip the emit process about webpack if a genernator is not provided.
    if (generator == null) {
        return self.callback(null, resource);
    }

    // Get the new file name with the correct extension
    const parsedPath = path.parse(self.resourcePath);
    const parsedName = parsedPath.name;
    const outputPath = filename.replaceAll("[name]", parsedName).replaceAll("[ext]", format);

    self.emitFile(outputPath, resource);
    self.callback(null, `module.exports = __webpack_public_path__ + ${JSON.stringify(outputPath)};`);
}