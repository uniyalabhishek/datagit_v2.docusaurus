module.exports = {

  i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
    localeConfigs: {
      'fa': {
        direction: "rtl"
      }
    }
  },
  title: 'دیتاگیت',
  tagline: 'همیشه راه ساده تری هم هست.',
  url: 'https://massoudmaboudi.github.io',
  baseUrl: '/',
  organizationName: 'massoudmaboudi', // Usually your GitHub org/user name.
  projectName: 'datagit_v2.docusaurus', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // onBrokenMarkdownLinks:'ignore',
  favicon: 'img/favicon.ico',
  themeConfig: {
    // Relative to your site's "static" directory.
    // Cannot be SVGs. Can be external URLs too.
    image: 'img/metaImage.png',
    hideableSidebar: true,
    gtag: {
      trackingID: 'G-98VZHCYVG8',
    },

    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      disableSwitch: true,

      // Important to enforce light mode
      respectPrefersColorScheme: false,
    },
    navbar: {

      title: 'دیتاگیت',
      logo: {
        alt: 'لوگو دیتاگیت',
        src: 'img/logo.svg',
        // srcDark: 'img/logo_dark.svg', // Default to `logo.src`.
        // href: 'https://datagit.ir/', // Default to `siteConfig.baseUrl`.
        // target: '_self', // By default, this value is calculated based on the `href` attribute (the external link will open in a new tab, all others in the current one).
      },
      items: [
        {
          to: 'docs/python/introduction',
          // activeBasePath: 'docs',
          label: 'پایتون',
          position: 'left',
          items: [
            {
              label: 'معرفی',
              to: 'docs/python/introduction',
            },
            {
              label: 'آموزش مقدماتی',
              to: 'docs/python/beginner/introduction',
            },
            // {
            //   label: 'Matplotlib',
            //   to: 'docs/',
            // },
          ],
        },
        {
          to: 'docs/git/introduction',
          label: 'گیت',
          position: 'left',
          items: [
            {
              label: 'معرفی',
              to: 'docs/git/introduction',
            },
            {
              label: 'آموزش مقدماتی',
              to: 'docs/git/beginner/introduction',
            },
          ],
        },
        {
          to: "contact",
          label: "تماس با من",
          position: "right",
        },
        { to: 'blog', label: 'بلاگ', position: 'right' },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'لوگو دیتاگیت',
        src: 'img/logoGray.svg',
        href: 'https://datagit.it',
      },
      copyright: `دیتاگیت ۱۳۹۷ - امروز`,
    },

    // CodeBlock Theme,
    // By default, we use Palenight as syntax highlighting theme.
    prism: {
      additionalLanguages: ['r'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'وبلاگ دیتاگیت!',
          blogDescription: 'جایی برای خواندن همه چیز!',
          showReadingTime: true,
          blogSidebarTitle: 'مطالب اخیر'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 4, // the max number of images generated between min and max (inclusive)
      },
    ],
    ['@docusaurus/plugin-google-gtag',
      {
        id: 'gtag'
      }
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap',
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
  scripts: [
  ],
};
