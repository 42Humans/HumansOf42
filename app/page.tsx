import { InterviewListView } from "@/components/interview/View";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full h-fit">
      <div className="flex justify-center">
        <InterviewListView />
      </div>
    </main>
  );
}
