import Image from "next/image";
import Link from "next/link";
import { interviews } from "@/interview";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full h-fit">
      <div className="flex justify-center">
        <InterviewListView />
      </div>
    </main>
  );
}

function InterviewListView() {
  return (
    <div className="relative w-fit h-fit justify-items-center gap-16 grid grid-cols md:grid-cols-2 2xl:grid-cols-3 p-8">
      {interviews.map((interview) => (
        <div className="relative" key={interview.id}>
          <Image
            alt={`interview for ${interview.interviewee}`}
            src={interview.photos.main}
            width={336}
            height={336}
            className="w-full object-cover aspect-square"
            placeholder="blur"
            priority={true}
          />
          <Link
            href={`/interviews/${interview.id}`}
            className="bg-transparent group transition-colors absolute hover:bg-black/30 inset-0 hover:flex justify-center items-center"
          >
            <span className="text-transparent italic group-hover:text-white font-black text-lg">
              {interview.interviewee.join(", ")}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
