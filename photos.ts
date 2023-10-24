import { StaticImageData } from "next/image";
import yeongo from "@/public/picture/20220826_yeongo/main.jpg";
export type Photo = {
  id: string;
  name: string;
  href: string;
  username: string;
  imageSrc: StaticImageData;
};

const photos: Photo[] = [
  {
    id: "1",
    name: "yeongo",
    href: "https://twitter.com/kvncnls/status/1471832344986324998",
    username: "@kvncnls",
    imageSrc: yeongo,
  },
];

export default photos;
