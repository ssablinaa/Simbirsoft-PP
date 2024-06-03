export interface FooterSection {
  title: string;
  links: FooterLink[];
}
export interface FooterLink {
  text: string;
  url: string;
}

export interface SocialIcon {
  iconClass: string;
  url: string;
}
