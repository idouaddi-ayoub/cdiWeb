import facebook from "../assets/icons/svg/facebook.svg";
import instagram from "../assets/icons/svg/instagram.svg";

export const Card = [];

export const socialMedia = [
  {
    src: facebook,
    alt: "facebook logo",
    link: "https://www.facebook.com/profile.php?id=100083258262773",
  },
  {
    src: instagram,
    alt: "instagram logo",
    link: "https://www.instagram.com/cdi_encgagadir/",
  },
];

export const footerLinks = [
  {
    title: "Activities and Projects",
    links: [
      { name: "Portfolio", link: "/portfolio" },
      { name: "Projects", link: "/projects" },
      { name: "Events", link: "/events" },
      ,
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/about-us" },
      { name: "FAQs", link: "/faq" },
      // { name: "Support", link: "/privacypolicy" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        name: "Contact us",
        link: "/contact-us",
      },
      // { name: "+212 X XX XX XX XX ", link: "tel:+212XXXXXXXXX" },
    ],
  },
];
