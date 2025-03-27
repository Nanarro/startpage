// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  disabled: [],
  openLastVisitedTab: true,
  localIcons: true,
  tabs: [
    {
      name: "home",
      background_url: `src/img/banners/cbg-13.gif`,
      categories: [
        {
          name: "",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/#inbox",
              icon: "brand-gmail",
              icon_color: palette.blue,
            },
            {
              name: "telegram",
              url: "https://web.telegram.org/a/",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file-text",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "canva",
              url: "https://www.canva.com/",
              icon: "brand-canva",
              icon_color: palette.peach,
            },
            {
              name: "twitter",
              url: "https://x.com",
              icon: "brand-x",
              icon_color: palette.text,
            },
          ],
        },
        {
          name: "",
          links: [
            {
              name: "uat",
              url: "https://alumnos.uat.edu.mx/",
              icon: "brand-UAT",
              icon_color: palette.green,
            },
            {
              name: "myrient",
              url: "https://myrient.erista.me/files/",
              icon: "brand-myrient",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
           {
              name: "whatsapp",
              url: "https://web.whatsapp.com/",
              icon: "whatsapp",
              icon_color: palette.lavender,
            },
          ]
        },
        {
          name: "",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: palette.teal,
            },
          ]
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
