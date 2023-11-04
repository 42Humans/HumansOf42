import Frame from "@/components/frame/Frame";
import Modal from "@/components/modal/Modal";
import { interviews } from "@/interview";

export function generateStaticParams() {
  return interviews.map((photo) => ({ id: photo.id.toString }));
}

export default function PhotoModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const interview = interviews.find((i) => i.id === Number(id));

  if (interview === undefined) {
    return <></>;
  }

  return (
    <Modal>
      <div></div>
    </Modal>
  );
}
