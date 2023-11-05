import Modal from "@/components/modal/Modal";
import { photos } from "@/images";
import { interviews } from "@/interview";
import { interview_contents } from "@/interview_json";
import Image from "next/image";

export function generateStaticParams() {
  return interviews.map((interview) => {
    const id_string = interview.id.toString();
    return { id: id_string };
  });
}

export default function InterviewModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const interview_meta = interviews.find((i) => i.id === Number(id));
  const photo = photos.find((i) => i.id === Number(id));
  const interview = interview_contents.find((i) => i.id === Number(id));

  if (
    interview_meta === undefined ||
    photo === undefined ||
    interview === undefined
  ) {
    return <>Page not found</>;
  }

  return (
    <Modal>
      <div className="relative w-11/12">
        {photo.main !== undefined && (
          <Image
            alt={`Photo of ${interview_meta.interviewee}`}
            src={photo.main}
            className="w-full object-cover aspect-square col-span-2"
          />
        )}
        <h1>{interview_meta.title}</h1>
        <h1>{interview_meta.subtitle}</h1>
        <h1>{interview_meta.date.toDateString()}</h1>
        {interview.content.map((paragraph) => {
          if (paragraph.text !== undefined) {
            return <div key={id}>{paragraph.text}</div>;
          } else if (paragraph.speaker !== undefined) {
            return <div key={id}>{paragraph.speaker}</div>;
          } else if (paragraph.imagePath !== undefined) {
            return <div key={id}>{paragraph.imagePath}</div>;
          }
        })}

        <h1>{interview_meta.photographer}</h1>
        <h1>{interview_meta.interviewer}</h1>
      </div>
    </Modal>
  );
}
