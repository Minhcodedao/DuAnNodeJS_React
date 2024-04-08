// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        shop: resolve(__dirname, "./product.html"),
        cart: resolve(__dirname, "./cart.html"),
        pay: resolve(__dirname, "./address.html"),
        products: resolve(__dirname, "./products.html"),
      },
    },
  },
});
