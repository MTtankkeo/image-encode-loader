import { LoaderContext } from "webpack";
interface EncodeLoaderOptions {
    html: boolean;
    jsx: boolean;
}
/** This function is the entry point for `html-image-loader` */
export declare function ImageEncodeLoader(this: LoaderContext<EncodeLoaderOptions>, source: Buffer): void;
export {};
