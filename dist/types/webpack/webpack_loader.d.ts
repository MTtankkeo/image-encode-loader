import { LoaderContext } from "webpack";
/** Signature for the interface that defines options for `image-encode-loader` */
export interface EncodeLoaderOptions {
    format: "webp" | "avif" | "tiff" | "heif" | "jpeg" | "png" | "gif";
}
/** This function is the entry point for `image-encode-loader` */
export declare function ImageEncodeLoader(this: LoaderContext<EncodeLoaderOptions>, resource: Buffer): void;
