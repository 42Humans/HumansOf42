import { Interview } from "@/interview";
import { revalidatePath } from "next/cache";
import Image from "next/image";

export async function getStaticProps() {
  // Simulate data fetching with a delay
  await new Promise((resolve) => setTimeout(resolve, 20000));
  // After the timeout, return your static props
  return {
    props: {}, // no need to pass actual data for static assets
  };
}

export function InterviewContents({ interview }: { interview: Interview }) {
  return (
    <div className="flex flex-col justify-start">
      {interview.content.map((paragraph, index) => {
        const className = paragraph.className ?? "";

        if (paragraph.text !== undefined) {
          return (
            <p
              className={`font-sans font-medium not-italic px-4 pb-3 ${className}`}
              key={index}
            >
              {paragraph.text}
            </p>
          );
        }

        if (paragraph.speaker !== undefined) {
          return (
            <p
              className={`w-full flex italic pb-0.5 pt-2 justify-start text-gray-300/70 ${className}`}
              key={index}
            >
              {paragraph.speaker}
            </p>
          );
        }

        if (paragraph.question !== undefined) {
          return (
            <p className={`${className}`} key={index}>
              {paragraph.question}
            </p>
          );
        }

        if (paragraph.sub !== undefined) {
          return (
            <p className={`${className}`} key={index}>
              {paragraph.sub}
            </p>
          );
        }

        if (paragraph.imageDescription !== undefined) {
          const image = interview.photos.sub.shift();
          if (image === undefined) {
            revalidatePath(`/picture/${interview.id}/`);
          }
          if (image !== undefined) {
            return (
              <Image
                key={index}
                src={image}
                className={`py-8 lg:px-12 2xl:px-36 ${className}`}
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