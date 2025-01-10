import Inst from "@/pictures/Inst.png";
import LinkedIn from "@/pictures/LinkedIn.png";
import FB from "@/pictures/FB.png";
import Twitter from "@/pictures/Twitter.png";

interface SocialLink {
  to: string;
  img: string;
  alt: string;
}

export const socials: SocialLink[] = [
  { to: "#S", img: Inst, alt: "Inst" },
  { to: "#S", img: LinkedIn, alt: "LinkedIn" },
  { to: "#S", img: FB, alt: "FB" },
  { to: "#S", img: Twitter, alt: "Twitter" },
];
