import { LoaderContext } from "webpack";
/** Signature for the interface that defines options for `image-encode-loader` */
export interface EncodeLoaderOptions {
    format: "webp" | "avif" | "tiff" | "heif" | "jpeg" | "png" | "gif";
    generator: {
        filename: string;
    };
}
/** This function is the entry point for `image-encode-loader` */
export declare function ImageEncodeLoader(this: LoaderContext<EncodeLoaderOptions>, resource: Buffer): void;
/**
 * Emits a file for converted image output.
 * And, Returns the path to the newly emitted file as a JavaScript module export.
 */
export declare function outputImageWith(self: LoaderContext<EncodeLoaderOptions>, resource: Buffer): void;
