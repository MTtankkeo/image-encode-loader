import { LoaderContext } from "webpack";

interface EncodeLoaderOptions {
    html: boolean,
    jsx: boolean;
}

/** This function is the entry point for `image-encode-loader` */
export function ImageEncodeLoader(this: LoaderContext<EncodeLoaderOptions>, source: Buffer) {
    const callback = this.async();

    console.log(source.length);
}