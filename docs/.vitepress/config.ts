import { defineConfig, type DefaultTheme } from "vitepress";

// const require = createRequire(import.meta.url);
// const pkg = require("vitepress/package.json");

export default defineConfig({
  lang: "en-US",
  title: "eQual",
  description:
    "eQual is a versatile web-oriented framework, aiming to elegantly manage interactions between front-end Apps and Business Logic involved in modern Applications.",

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, "[!code");
        },
      },
    ],
  },

  sitemap: {
    hostname: "https://doc.equal.run",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/img/equal_logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'eQual' }],
    ['meta', { name: 'og:image', content: 'https://dev.equal.run/assets/img/eq_logo.png' }],
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  ],

  themeConfig: {
    logo: { src: "/assets/img/equal_logo.svg", width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      "/getting-started/": {
        base: "/getting-started/",
        items: sidebarGettingStarted(),
      },
      "/howtos-and-examples/": {
        base: "/howtos-and-examples/",
        items: sidebarGettingStarted(),
      },
      "/usage/": { base: "/usage/", items: sidebarUsage() },
      "/advanced/": { base: "/advanced/", items: sidebarAdvanced() },
    },

    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "8J64VVRP8K",
    //     apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
    //     indexName: "vitepress",
    //   },
    // },

    socialLinks: [
      { icon: "github", link: "https://github.com/equalframework" },
    ],

    footer: {
      message: "Released under the GPL License.",
      copyright: "Copyright © 2018-present YesBabylon",
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Usage",
      link: "/usage/built-in-tools",
    },
    {
      text: "Cheat Sheet",
      link: "/howtos-and-examples/generic-cheat-sheet.md",
    },
    {
      // text: pkg.version,
      items: [
        {
          text: "Changelog",
          link: "https://github.com/equalframework/equal/blob/master/CHANGELOG.md",
        },
        {
          text: "Contributing",
          link: "https://github.com/equalframework/equal/blob/master/CONTRIBUTING.md",
        },
      ],
    },
  ];
}

/* prettier-ignore */
function sidebarGettingStarted(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      base: "/getting-started/",      
      collapsed: false,
      items: [
        { text: 'Why eQual?', link: 'introduction' },
        { text: 'Getting Started', link: 'installation' },
        { text: 'Configuration', link:  'configuration' },
        { text: 'Deploy', link: 'deployment' }
      ]
    },
    {
      text: 'Examples',
      base: "/howtos-and-examples/",      
      collapsed: false,
      items: [
        { text: 'Generic', link: 'generic-cheat-sheet' },
        { text: 'Rest API', link: 'rest-api' },
        { text: 'Basic Controller', link: 'basic-controller' },
        { text: 'Basic Web App', link: 'basic-webapp' },

      ]
    },
    { text: "Usage", base: "/usage/", link: "built-in-tools" },
    { text: "Low-Code", base: "/low-code/", link: "shared-lib" },
    { text: "Advanced", base: "/advanced/", link: "cascade-configuration" },
  ];
}

function sidebarUsage(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Configuration", base: "/getting-started/", link: "configuration" },
    {
      text: "Examples",
      base: "/howtos-and-examples/",
      collapsed: true,
      items: [
        { text: "Generic cheat sheet", link: "generic-cheat-sheet" },
        { text: "Rest API", link: "rest-api" },
        { text: "Basic Controller", link: "basic-controller" },
        { text: "Basic Web App", link: "basic-webapp" },
      ],
    },
    {
      text: "Usage",
      collapsed: false,
      items: [
        { text: "Built-in Tools", link: "built-in-tools" },
        { text: "Directory Structure", link: "directory-structure" },
        { text: "Packages", link: "packages" },
        { text: "Model Definition", link: "model-definition" },
        { text: "Actions", link: "actions" },
        { text: "Controllers", link: "controllers" },
        { text: "CRUD", link: "crud" },
        { text: "Searching", link: "searching" },
        { text: "Validation", link: "validation" },
        { text: "Routing", link: "routing" },
        { text: "Views", link: "views" },
        { text: "i18n", link: "i18n" },
        { text: "Error Handling", link: "error-handling" },
        { text: "Debugging", link: "debugging" },
        { text: "Testing", link: "testing" },
      ],
    },
    {
      text: "Low Code & Tools",
      base: "/low-code/",
      collapsed: false,
      items: [
        {
          text: "shared libraries",
          link: "shared-lib",
        },
        { text: "eQ UI", link: "equi" },
        { text: "workbench", link: "low-code" },
      ],
    },
    {
      text: "Architecture",
      base: "/architecture-concepts/",
      collapsed: false,
      items: [
        { text: "Collections", link: "collections" },
        { text: "Http Native", link: "http-native" },
        {
          text: "Dependency Injection",
          link: "dependency-injection",
        },
        { text: "Domains", link: "domains" },
      ],
    },
    { text: "Advanced", base: "/advanced/", link: "cascade-configuration" },
  ];
}

function sidebarAdvanced(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "Generic cheat sheet",
      base: "/howtos-and-examples/",
      link: "generic-cheat-sheet",
    },
    {
      text: "Advanced",
      base: "/advanced/",
      items: [
        { text: "Cascade", link: "cascade-configuration" },
        { text: "Security", link: "security" },
        { text: "Workflows", link: "workflows" },
        { text: "Logging", link: "logging" },
        { text: "Remote APIs", link: "remote-apis" },
        { text: "CI/CD", link: "ci-cd" },
        { text: "External Libraries", link: "external-libraries" },
        { text: "CLI", link: "console-cli" },
        // {
        //   text: "Default Theme",
        //   base: "/reference/default-theme-",
        //   items: [
        //     { text: "Overview", link: "config" },
        //     { text: "Nav", link: "nav" },
        //     { text: "Sidebar", link: "sidebar" },
        //     { text: "Home Page", link: "home-page" },
        //     { text: "Footer", link: "footer" },
        //     { text: "Layout", link: "layout" },
        //     { text: "Badge", link: "badge" },
        //     { text: "Team Page", link: "team-page" },
        //     { text: "Prev / Next Links", link: "prev-next-links" },
        //     { text: "Edit Link", link: "edit-link" },
        //     { text: "Last Updated Timestamp", link: "last-updated" },
        //     { text: "Search", link: "search" },
        //     { text: "Carbon Ads", link: "carbon-ads" },
        //   ],
        // },
      ],
    },
  ];
}
