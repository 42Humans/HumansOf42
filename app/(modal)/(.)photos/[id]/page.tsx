import Frame from "@/components/frame/Frame";
import Modal from "@/components/modal/Modal";
import  from "@/interview";

export function generateStaticParams() {
  return swagPhotos.map((photo) => ({ id: photo.id }));
}

export default function PhotoModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: Photo = swagPhotos.find((p) => p.id === id)!;

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  );
}
