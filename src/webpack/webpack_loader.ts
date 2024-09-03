import { LoaderContext } from "webpack";

interface EncodeLoaderOptions {
    html: boolean,
    jsx: boolean;
}

/** This function is the entry point for `html-image-loader` */
export function ImageEncodeLoader(this: LoaderContext<EncodeLoaderOptions>, source: Buffer) {
    const callback = this.async();

    console.log(source.length);
}