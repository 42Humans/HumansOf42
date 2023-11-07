import main1 from "@/public/picture/1/main.webp";
import main2 from "@/public/picture/2/main.webp";
import main3 from "@/public/picture/3/main.webp";
import main4 from "@/public/picture/4/main.webp";
import main5 from "@/public/picture/5/main.webp";
import main6 from "@/public/picture/6/main.webp";
import main7 from "@/public/picture/7/main.webp";
import main8 from "@/public/picture/8/main.webp";
import main9 from "@/public/picture/9/main.webp";
import main10 from "@/public/picture/10/main.webp";
import main11 from "@/public/picture/11/main.webp";
import main12 from "@/public/picture/12/main.webp";
import main13 from "@/public/picture/13/main.webp";
import main14 from "@/public/picture/14/main.webp";
import main15 from "@/public/picture/15/main.webp";
import main16 from "@/public/picture/16/main.webp";
import main17 from "@/public/picture/17/main.webp";
import main18 from "@/public/picture/18/main.webp";
import main19 from "@/public/picture/19/main.webp";
import main20 from "@/public/picture/19/main2.webp";
import main21 from "@/public/picture/21/main.webp";
import main22 from "@/public/picture/22/main.webp";
import main23 from "@/public/picture/23/main.webp";
import main24 from "@/public/picture/24/main.webp";
import main25 from "@/public/picture/25/main.webp";
import main26 from "@/public/picture/26/main1.webp";
import main27 from "@/public/picture/26/2main.webp";
import main28 from "@/public/picture/28/main.jpeg";
import main29 from "@/public/picture/29/main.webp";
import main30 from "@/public/picture/30/main.webp";
import main31 from "@/public/picture/31/main.webp";
import main32 from "@/public/picture/32/main.webp";
import main33 from "@/public/picture/33/main.webp";
import main34 from "@/public/picture/34/main.webp";
import main35 from "@/public/picture/35/main.webp";
import main36 from "@/public/picture/36/main.webp";
import main37 from "@/public/picture/37/main.webp";
import main38 from "@/public/picture/38/main.webp";
import main39 from "@/public/picture/39/main.webp";
import main40 from "@/public/picture/40/main.webp";
import main41 from "@/public/picture/41/main.webp";
import main42 from "@/public/picture/42/main.webp";
import main43 from "@/public/picture/43/main.webp";
import sub1 from "@/public/picture/1/sub1.webp";
import sub2 from "@/public/picture/2/sub1.webp";
import sub4 from "@/public/picture/4/sub1.webp";
import sub5 from "@/public/picture/5/sub1.webp";
import sub6 from "@/public/picture/6/sub1.webp";
import sub7 from "@/public/picture/7/sub1.webp";
import sub8 from "@/public/picture/8/sub1.webp";
import sub9 from "@/public/picture/9/sub1.webp";
import sub11 from "@/public/picture/11/sub1.webp";
import sub12 from "@/public/picture/12/sub1.webp";
import sub13 from "@/public/picture/13/sub1.webp";
import sub14 from "@/public/picture/14/sub1.webp";
import sub15 from "@/public/picture/15/sub1.webp";
import sub16 from "@/public/picture/16/sub1.webp";
import sub17 from "@/public/picture/17/sub1.webp";
import sub18 from "@/public/picture/18/sub1.webp";
import sub20 from "@/public/picture/19/2sub1.webp";
import sub21 from "@/public/picture/21/sub1.webp";
import sub22 from "@/public/picture/22/sub1.webp";
import sub23 from "@/public/picture/23/sub1.webp";
import sub24 from "@/public/picture/24/sub1.webp";
import sub25 from "@/public/picture/25/sub1.webp";
import sub26 from "@/public/picture/26/1sub1.webp";
import sub26_2 from "@/public/picture/26/1sub2.webp";
import sub27 from "@/public/picture/26/2sub1.webp";
import sub27_2 from "@/public/picture/26/2sub2.webp";
import sub27_3 from "@/public/picture/26/2sub3.webp";
import sub28 from "@/public/picture/28/sub1.jpeg";
import sub29 from "@/public/picture/29/sub1.webp";
import sub30 from "@/public/picture/30/sub1.jpeg";
import sub31 from "@/public/picture/31/sub1.webp";
import sub32 from "@/public/picture/32/sub1.webp";
import sub34 from "@/public/picture/34/sub1.webp";
import sub35 from "@/public/picture/35/sub1.webp";
import sub36 from "@/public/picture/36/sub1.webp";
import sub37 from "@/public/picture/37/sub1.webp";
import sub38 from "@/public/picture/38/sub1.webp";
import sub39 from "@/public/picture/39/sub1.webp";
import sub40 from "@/public/picture/40/sub1.webp";
import sub41 from "@/public/picture/41/sub1.webp";
import sub42 from "@/public/picture/42/sub1.webp";
import sub43 from "@/public/picture/43/sub1.webp";
import { StaticImageData } from "next/image";

type Photo = {
  id: number;
  main: StaticImageData;
  sub: StaticImageData[];
};

export const photos: Photo[] = [
  { id: 1, main: main1, sub: [sub1] },
  { id: 2, main: main2, sub: [sub2] },
  { id: 3, main: main3, sub: [] },
  { id: 4, main: main4, sub: [sub4] },
  { id: 5, main: main5, sub: [sub5] },
  { id: 6, main: main6, sub: [sub6] },
  { id: 7, main: main7, sub: [sub7] },
  { id: 8, main: main8, sub: [sub8] },
  { id: 9, main: main9, sub: [sub9] },
  { id: 10, main: main10, sub: [] },
  { id: 11, main: main11, sub: [sub11] },
  { id: 12, main: main12, sub: [sub12] },
  { id: 13, main: main13, sub: [sub13] },
  { id: 14, main: main14, sub: [sub14] },
  { id: 15, main: main15, sub: [sub15] },
  { id: 16, main: main16, sub: [sub16] },
  { id: 17, main: main17, sub: [sub17] },
  { id: 18, main: main18, sub: [sub18] },
  { id: 19, main: main19, sub: [] },
  { id: 20, main: main20, sub: [sub20] },
  { id: 21, main: main21, sub: [sub21] },
  { id: 22, main: main22, sub: [sub22] },
  { id: 23, main: main23, sub: [sub23] },
  { id: 24, main: main24, sub: [sub24] },
  { id: 25, main: main25, sub: [sub25] },
  { id: 26, main: main26, sub: [sub26, sub26_2] },
  { id: 27, main: main27, sub: [sub27, sub27_2, sub27_3] },
  { id: 28, main: main28, sub: [sub28] },
  { id: 29, main: main29, sub: [sub29] },
  { id: 30, main: main30, sub: [sub30] },
  { id: 31, main: main31, sub: [sub31] },
  { id: 32, main: main32, sub: [sub32] },
  { id: 33, main: main33, sub: [] },
  { id: 34, main: main34, sub: [sub34] },
  { id: 35, main: main35, sub: [sub35] },
  { id: 36, main: main36, sub: [sub36] },
  { id: 37, main: main37, sub: [sub37] },
  { id: 38, main: main38, sub: [sub38] },
  { id: 39, main: main39, sub: [sub39] },
  { id: 40, main: main40, sub: [sub40] },
  { id: 41, main: main41, sub: [sub41] },
  { id: 42, main: main42, sub: [sub42] },
  { id: 43, main: main43, sub: [sub43] },
];
