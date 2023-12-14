import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "eQual framework doc",
  description:
    "eQual is a versatile web-oriented framework, aiming to elegantly manage interactions between front-end Apps and Business Logic involved in modern Applications.",
  themeConfig: {
    logo: { src: "/assets/img/equal_logo.svg", width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Cheat Sheet",
        link: "/howtos-and-examples/generic-cheat-sheet.md",
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/equalframework" },
    ],
  },
});
