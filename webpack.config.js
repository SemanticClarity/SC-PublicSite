const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const CopyPlugin = require("copy-webpack-plugin");
const devServer = require("./devServer.js");
const middleware = require("./middleware.js");
const Package = require("./package.json");

const NAME = "Semantic Clarity";
const LOGO = "./src/images/icon.png";

const isProd = process.argv[process.argv.indexOf("--mode") + 1] === "production";
console.log(`Mode: ${((isProd) ? "Production" : "Development")}`);

module.exports = {
  entry: ["./src/index.jsx"],
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, "public")
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8080,
    before: middleware,
    after: devServer
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader", options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader", options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  stats: "errors-only",
  devtool: isProd ? false : "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(Package.version),
      APP_NAME: JSON.stringify("website"),
      APP_TITLE: JSON.stringify(NAME),
      DESCRIPTION: JSON.stringify(Package.description),
      AUTHOR: JSON.stringify(Package.author),
      WEBSITE: JSON.stringify(Package.homepage),
      AUTO_INVOKE: true,
      GA: isProd ? true: false,
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.DEBUG": JSON.stringify(process.env.DEBUG),
      YEAR: new Date().getFullYear()
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      inject: true,
      title: NAME,
      meta: {
        "charset": "utf-8",
        "Description": Package.description,
        "viewport": "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, viewport-fit=cover",
        "theme-color": "#403014",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-title": NAME,
        "apple-mobile-web-app-status-bar-style": "black"
      },
      xhtml: true
    }),
    
    new HtmlWebpackPartialsPlugin({
      path: "./src/partials/noscript.html",
      location: "head",
      priority: "low",
      inject: true
    }),
    new HtmlWebpackPartialsPlugin({
      path: "./src/partials/style.html",
      location: "head",
      priority: "low",
      inject: true
    }),
    new HtmlWebpackPartialsPlugin({
      path: "./src/partials/main.html",
      location: "body",
      priority: "high",
      inject: true
    }),
    new FaviconsWebpackPlugin({
      logo: LOGO,
      prefix: "images/",
      inject: true,
      cache: true,
      favicons: {
        icons: {
          // Platform Options:
          // - offset - offset in percentage
          // - background:
          //   * false - use default
          //   * true - force use default, e.g. set background for Android icons
          //   * color - set background for the specified icons
          //   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
          //   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
          //   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
          //
          android: false,              // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          appleIcon: false,            // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          appleStartup: false,         // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          coast: false,                // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          favicons: true,              // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          firefox: false,              // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          windows: false,              // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
          yandex: false                // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
        }
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new WebpackPwaManifest({
      name: NAME,
      short_name: "AugNext",
      description: NAME,
      orientation: "portrait",
      display: "standalone",
      start_url: ".",
      background_color: "#403014",
      ios: true,
      theme_color: "black",
      crossorigin: "use-credentials", //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve(LOGO),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          ios: true
        },
        {
          src: path.resolve(LOGO),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join("icons", "ios"),
          ios: true
        },
        {
          src: path.resolve(LOGO),
          size: 1024,
          destination: path.join("icons", "ios"),
          ios: "startup"
        },
        {
          src: path.resolve(LOGO),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join("icons", "android")
        }
      ]
    }),
    new CopyPlugin({
      patterns: [
      { from: "src/robots.txt", to: "robots.txt" }
    ]}),
  ],
  // optimization
  optimization: !isProd ? {} :
  {
    providedExports: true,
    usedExports: true,
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            const name = `vendor.${packageName.replace("@", "")}`;
            // npm package names are URL-safe, but some servers don"t like @ symbols
            return name;
          }
        }
      }
    }
  }
};
