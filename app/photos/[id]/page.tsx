import Frame from "@/components/frame/Frame";
import { interviews } from "@/interview";

// export function generateStaticParams() {
//   return interviews.map((interview) => ({ id: interview.id.toString! }));
// }

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const interview = interviews.find((i) => i.id === Number(id));

  if (interview === undefined) {
    return <></>;
  }
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <div className="">
          <h1>{interview.title}</h1>
          <h1>{interview.subtitle}</h1>
          <h1>{interview.date.toDateString()}</h1>
          <h1>{interview.photographer}</h1>
          <h1>{interview.interviewer}</h1>
        </div>
      </div>
    </div>
  );
}
