import Image from "next/image";
import Link from "next/link";
import { interviews } from "@/interview";
import { photos } from "@/images";

export default function Home() {
  return (
    <main className="relative flex flex-col bg-gray-100 dark:bg-black/90 w-full h-screen">
      <NaviBar />
      <InterviewListView />
    </main>
  );
}

function NaviBar() {
  return (
    <div className="w-full flex flex-row bg-gray-800">
      <Link className="p-4" href={"/"}>
        <span className="rounded p-1 outline-none hover:outline hover:outline-white/30 text-white">
          Humans of 42
        </span>
      </Link>
    </div>
  );
}

function InterviewListView() {
  return (
    <div className="flex justify-center">
      <div className="w-fit h-full justify-items-center gap-16 grid grid-cols lg:grid-cols-2 2xl:grid-cols-3 p-8 bg-gray-50 dark:bg-black">
        {interviews.map((interview) => (
          <Link key={interview.id} href={`/photos/${interview.id}`}>
            <Image
              alt={`interview for ${interview.interviewee}`}
              src={photos[interview.id].main}
              height={400}
              width={336}
              className="w-full object-cover aspect-auto"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
