import Image from "next/image";
import Link from "next/link";
import { interviews } from "@/interview";
import { photos } from "@/images";

export default function Home() {
  return (
    <main className="relative flex flex-col bg-gray-100 dark:bg-black/90 w-full h-fit">
      <InterviewListView />
    </main>
  );
}

function InterviewListView() {
  return (
    <div className="flex justify-center">
      <div className="relative w-fit h-fit justify-items-center gap-16 grid grid-cols lg:grid-cols-2 2xl:grid-cols-3 p-8 bg-gray-50 dark:bg-gray-900/30">
        {interviews.map((interview) => (
          <div className="relative" key={interview.id}>
            <Image
              alt={`interview for ${interview.interviewee}`}
              src={photos.find((photo) => photo.id === interview.id)?.main!}
              width={336}
              className="w-full object-cover aspect-square"
            />
            <Link
              href={`/interviews/${interview.id}`}
              className="bg-transparent group transition-colors absolute hover:bg-black/30 inset-0 hover:flex justify-center items-center"
            >
              <span className="text-transparent group-hover:text-white font-black text-lg">
                {interview.interviewee.join(", ")}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
