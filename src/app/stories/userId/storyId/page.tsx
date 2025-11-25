import Image from "next/image";

export default function StoryPage({ params }: { params: { userId: string, storyId: string } }) {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <h1 className="text-white text-xl">
        Story Page - User {params.userId} - Story {params.storyId}
      </h1>
    </div>
  );
}
