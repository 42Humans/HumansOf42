"use client";
import { nanum_brush, noto_sans_kr } from "@/app/fonts";
import { Interview } from "@/interview";
import Image from "next/image";
import { useRouter } from "next/navigation";

export async function getStaticProps() {
  // Simulate data fetching with a delay
  await new Promise((resolve) => setTimeout(resolve, 20000));
  // After the timeout, return your static props
  return {
    props: {}, // no need to pass actual data for static assets
  };
}

export function InterviewContents({ interview }: { interview: Interview }) {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-start">
      {interview.content.map((paragraph, index) => {
        const className = paragraph.className ?? "";

        if (paragraph.text !== undefined) {
          return (
            <p
              className={`font-sans font-normal text-base dark:text-gray-200/90 not-italic px-4 pb-3 ${className} ${noto_sans_kr.className}`}
              key={index}
            >
              {paragraph.text}
            </p>
          );
        }

        if (paragraph.speaker !== undefined) {
          return (
            <p
              key={index}
              className={`w-full flex italic pb-0.5 pt-2 justify-start font-bold text-black/60 dark:text-gray-300/70 ${className}`}
            >
              {paragraph.speaker}
            </p>
          );
        }

        if (paragraph.question !== undefined) {
          return (
            <p
              className={`w-full flex justify-start text-xl not-italic items-center pl-3 py-6 font-bold ${className}`}
              key={index}
            >
              Q. {paragraph.question}
            </p>
          );
        }

        if (paragraph.sub !== undefined) {
          return (
            <p
              className={`text-black/30 dark:text-white/30 ${className}`}
              key={index}
            >
              {paragraph.sub}
            </p>
          );
        }

        if (paragraph.imageDescription !== undefined) {
          const image = interview.photos.sub.shift();
          if (image === undefined) {
            router.refresh();
          }
          if (image !== undefined) {
            return (
              <Image
                key={index}
                src={image}
                className={`py-16 lg:px-8 2xl:px-32 w-full object-cover aspect-auto ${className}`}
                alt={`Photo of ${interview.interviewee}`}
                priority={true}
                loading="eager"
              />
            );
          }
        }
      })}
    </div>
  );
}
