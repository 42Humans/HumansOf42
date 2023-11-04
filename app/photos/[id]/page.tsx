import Frame from "@/components/frame/Frame";
import { interviews } from "@/interview";
export function generateStaticParams() {
  return interviews.map((photo) => ({ id: photo.id.toString }));
}

export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const interview = interviews.find((i) => i.id === Number(id));

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700"></div>
    </div>
  );
}
