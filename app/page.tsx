import Image from "next/image";
import Link from "next/link";
import swagPhotos from "@/photos";

export default function Home() {
  const photos = swagPhotos;

  return (
    <main className="relative flex flex-col bg-white w-full h-fit">
      <div className="w-full flex flex-row bg-gray-800">
        <Link className="p-4" href={"/"}>
          <span className="rounded p-1 outline-none hover:outline hover:outline-white/30 text-white">
            Humans of 42
          </span>
        </Link>
      </div>
      <div className="flex justify-center bg-gray-100 dark:bg-black/90">
        <div className="w-fit h-full justify-items-center gap-16 grid grid-cols lg:grid-cols-2 2xl:grid-cols-3 p-8 bg-gray-50 dark:bg-black">
          {photos.map(({ id, imageSrc }) => (
            <Link key={id} href={`/photos/${id}`}>
              <Image
                alt=""
                src={imageSrc}
                height={400}
                width={336}
                className="w-full object-cover aspect-auto"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
