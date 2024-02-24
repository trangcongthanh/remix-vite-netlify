import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-edge-adapter/plugin";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  server: {
    port: 3000,
    host: "127.0.0.1",
  },
  plugins: [remix(), netlifyPlugin(), tsconfigPaths()],
});
