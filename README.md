<div align="center">
  <img width="200px" src="https://github.com/user-attachments/assets/3933881e-5d7f-4675-a4d1-1e67d7d0778e">
  <h1>Image Encode Webpack Loader</h1>
  <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>v1.0.0-bata2</th>
          </tr>
        </tbody>
    </table>
</div>

# Introduction
This webpack loader that uses [Sharp](https://sharp.pixelplumbing.com/) to encode images into web-friendly formats like WebP and AVIF without any external dependencies.

> __Commonly supported formats__:<br>
> webp, avif, tiff, heif, jpeg, png, gif

## Install by NPM
To install this package in your project, enter the following command.

> When you want to update this package, enter `npm update image-encode-loader --save` in the terminal to run it.

```
npm install image-encode-loader --save-dev
```

## How to apply this loader?
This example based on Webpack 5. Additionally, this loader does not provide any image output functionality.

```cjs
module.exports = {
  module: {
      rules: [
          // To export the image assets files from `src/` to `dist/`.
          // And by default, extensions are typical extensions supported by Chrome.
          {
              test: /\.(png|jpe?g|webp|avif|hei[cf]|gif|tiff)$/i,
              type: "asset/resource",
              use: [{
                  loader: "image-encode-loader",
                  options: {
                      // This format has the best compression rate at the moment.
                      format: "avif"
                  }
              }],
              generator: {
                  filename: "images/[name].avif"
              }
          }
      ]
  },
}
```