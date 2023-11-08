import { InterviewContents } from "@/components/interview/Contents";
import { interviews } from "@/interview";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return interviews.map((interview) => ({
    id: interview.id.toString(),
  }));
}

function StaffNameBox({ children }: React.PropsWithChildren) {
  return (
    <div className="flex justify-end font-black relative w-full italic">
      {children}
    </div>
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

  if (interview_meta === undefined) {
    throw notFound();
  }
  const intId = parseInt(id);
  if (intId < 0 && intId > interviews.length) {
    throw notFound();
  }

  const nextId = intId + 1;
  const prevId = intId - 1;
  const subphotos = interview_meta.photos.sub;
  if (
    subphotos.length !== 0 &&
    subphotos.every((value) => value === undefined)
  ) {
    throw notFound();
  }
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
      <Image
        alt={`Photo of ${interview_meta.interviewee}`}
        src={interview_meta.photos.main}
        className="py-16 lg:px-8 2xl:px-32 w-full object-cover aspect-auto col-span-2"
      />

      <InterviewContents interview={interview_meta} />

      <StaffNameBox>
        <p>interviewer {interview_meta.interviewer.join(", ")}</p>
      </StaffNameBox>
      <StaffNameBox>
        <p>photographer {interview_meta.photographer.join(", ")}</p>
      </StaffNameBox>
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
