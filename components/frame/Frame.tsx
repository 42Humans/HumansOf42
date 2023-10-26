import Image from "next/image";
import { Photo } from "../../photos";

export default function Frame({ photo }: { photo: Photo }) {
  return (
    <>
      <Image
        alt=""
        src={photo.imageSrc}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-black p-4 px-6">
        <h3 className="italic">{photo.name}</h3>
        <p className="italic">Taken by {photo.username}</p>
        <span></span>
      </div>
    </>
  );
}
