import { StaticImageData } from "next/image";
import yeongo_main from "@/public/picture/20220826_yeongo/main.jpg";
import yeongo_sub1 from "@/public/picture/20220826_yeongo/sub1.jpg";
import yeongo_sub2 from "@/public/picture/20220826_yeongo/sub2.jpg";
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
    imageSrc: yeongo_main,
  },
  {
    id: "2",
    name: "yeongo",
    href: "https://twitter.com/kvncnls/status/1471832344986324998",
    username: "@kvncnls",
    imageSrc: yeongo_sub1,
  },
];

export default photos;
