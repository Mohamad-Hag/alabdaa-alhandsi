interface SocialItem {
  link: string;
  linkText: string;
  name: string;
}

interface Social {
  facebook: SocialItem;
  instagram: SocialItem;
  whatsapp: SocialItem;
  email: SocialItem;
}

const social: Social = {
  email: {
    linkText: "alabdaalhndsi@gmail.com",
    link: "mailto:alabdaalhndsi@gmail.com",
    name: "Email",
  },
  facebook: {
    linkText: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61553803607327",
    name: "Facebook",
  },
  instagram: {
    linkText: "Instagram",
    link: "https://www.instagram.com/alabda_alhndsy/",
    name: "Instagram",
  },
  whatsapp: {
    linkText: "Whatsapp",
    link: "https://wa.me/971940322106",
    name: "Whatsapp",
  },
};

export default social;
