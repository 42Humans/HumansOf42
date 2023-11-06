import { photos } from "@/images";
import { interviews } from "@/interview";
import { interview_contents } from "@/interview_json";
import Image from "next/image";
import Link from "next/link";

// export function generateStaticParams() {
//   return interviews.map((interview) => {
//     const id_string = interview.id.toString();
//     return { id: id_string };
//   });
// }

function StaffNameBox({ children }: React.PropsWithChildren) {
  return (
    <h3 className="flex justify-end relative w-full italic">{children}</h3>
  );
}

const MAXINDEX = interviews.reduce(
  (max, interview) => (interview.id > max ? interview.id : max),
  interviews[0].id,
);

export default function InterviewPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const interview_meta = interviews.find((i) => i.id === Number(id));
  const photo = photos.find((i) => i.id === Number(id));
  const interview = interview_contents.find((i) => i.id === Number(id));

  if (
    interview === undefined ||
    photo === undefined ||
    interview_meta === undefined
  ) {
    return <>Page not found</>;
  }

  const intId = parseInt(id);
  if (intId < 0 && intId > interviews.length) {
    return <>Page not found</>;
  }

  const nextId = intId + 1;
  const prevId = intId - 1;

  return (
    <div className="container lg:px-32 2xl:px-40 my-10 flex justify-center items-center flex-col">
      <h1 className="py-3 text-2xl font-bold flex justify-center w-full">
        {interview_meta.title}
      </h1>
      <h1 className="text-lg w-full flex justify-center p-2">
        {interview_meta.subtitle}
      </h1>
      <h1 className="p-2 text-sm w-full flex justify-center">
        {interview_meta.date.toISOString().slice(0, 10)}
      </h1>
      {photo.main !== undefined && (
        <Image
          alt={`Photo of ${interview_meta.interviewee}`}
          src={photo.main}
          className="py-16 lg:px-8 2xl:px-32 w-full object-cover aspect-auto col-span-2"
          placeholder="blur"
          priority={true}
        />
      )}

      <div className="flex flex-col justify-start">
        {interview.content.map((paragraph, index) => {
          if (paragraph.text !== undefined) {
            return (
              <p className="font-sans px-4 pb-3" key={index}>
                {paragraph.text}
              </p>
            );
          } else if (paragraph.speaker !== undefined) {
            return (
              <p
                className="w-full flex italic pb-0.5 pt-2 justify-start text-gray-300/70"
                key={index}
              >
                {paragraph.speaker}
              </p>
            );
          } else if (paragraph.question !== undefined) {
            return <div key={index}>{paragraph.question}</div>;
          } else if (paragraph.sub !== undefined) {
            return <div key={index}>{paragraph.sub}</div>;
          } else if (paragraph.imageDescription !== undefined) {
            if (photo.sub !== undefined && photo.sub.length !== 0) {
              return (
                <Image
                  key={index}
                  src={photo.sub.shift()!}
                  className="py-8 lg:px-12 2xl:px-36"
                  alt={`Photo of ${paragraph.imageDescription}`}
                  placeholder="blur"
                  priority={true}
                />
              );
            }
          }
        })}
      </div>

      <StaffNameBox>
        interviewer {interview_meta.interviewer.join(", ")}
      </StaffNameBox>
      <StaffNameBox>photographer {interview_meta.photographer}</StaffNameBox>
      <div className="flex flex-row gap-2 w-10/12 justify-between pt-16">
        <Link
          className={`${prevId === 0 && "invisible"}`}
          href={`/interviews/${prevId}`}
        >
          <p>{"< 이전글"}</p>
        </Link>

        <Link
          className={`${nextId > MAXINDEX && "invisible"}`}
          href={`/interviews/${nextId}`}
        >
          <p>{"다음글 >"}</p>
        </Link>
      </div>
    </div>
  );
}
