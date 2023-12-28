export interface NavItem {
  text: string;
  link: string;
}

const navItems: NavItem[] = [
  { link: "#", text: "Home" },
  { link: "#services", text: "Our Services" },
  { link: "#place", text: "Our Place" },
  { link: "#contact", text: "Contact Us" },
];

export default navItems;
