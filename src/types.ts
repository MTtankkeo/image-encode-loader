
/** Signature for the output image path type for `image-encode-loader`. */
type ImageEncodeEmitPath = string;

// Signature for the image path of file `PNG` extension and format type.
declare module '*.{png,jpg,jpeg,webp,avif,heic,heif,gif,tiff' {
    const value: ImageEncodeEmitPath;
    export default value;
}