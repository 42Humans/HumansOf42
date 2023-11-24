"use client";
import Image from "next/image";
import { interviews } from "@/interview";
import { useRouter } from "next/navigation";

export async function getStaticProps() {
  // Simulate data fetching with a delay
  await new Promise((resolve) => setTimeout(resolve, 20000));
  // After the timeout, return your static props
  return {
    props: {}, // no need to pass actual data for static assets
  };
}

export function InterviewListView() {
  const router = useRouter();
  const reverse_interviews = [...interviews].reverse();

  return (
    <div className="relative w-fit max-w-7xl h-fit justify-items-center gap-16 grid grid-cols md:grid-cols-2 2xl:grid-cols-3 p-8">
      {reverse_interviews.map((interview) => (
        <div className="relative" key={interview.id}>
          <Image
            alt={`interview for ${interview.interviewee}`}
            src={interview.photos.main}
            className="w-full object-cover aspect-square"
            placeholder="blur"
            priority={true}
          />
          <button
            type="button"
            onClick={() => router.push(`/interviews/${interview.id}`)}
            className="bg-transparent group transition-colors absolute hover:bg-black/30 w-full inset-0 hover:flex justify-center items-center active:bg-black/20"
          >
            <span className="text-transparent italic group-hover:text-white font-black text-lg">
              {interview.interviewee.join(", ")}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
