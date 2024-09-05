/** Signature for the output image path type for `image-encode-loader`. */
type ImageEncodeEmitPath = string;
declare module '*.{png,jpg,jpeg,webp,avif,heic,heif,gif,tiff' {
    const value: ImageEncodeEmitPath;
    export default value;
}
