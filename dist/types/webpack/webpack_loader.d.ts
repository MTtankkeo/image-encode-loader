import { LoaderContext } from "webpack";
interface EncodeLoaderOptions {
    html: boolean;
    jsx: boolean;
}
/** This function is the entry point for `image-encode-loader` */
export declare function ImageEncodeLoader(this: LoaderContext<EncodeLoaderOptions>, source: Buffer): void;
export {};
