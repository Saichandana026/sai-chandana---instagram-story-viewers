"use client";

import Image from "next/image";
import { useState } from "react";
import StoryViewer from "./StoryViewer";

// Types for strong typing
type Story = {
  id: string;
  type: string;
  mediaUrl: string;
};

type StoryUser = {
  userId: string;
  username: string;
  profilePic: string;
  stories: Story[];
};

const storiesData: StoryUser[] = [
  {
    userId: "1",
    username: "Sohail",
    profilePic: "/avatars/user1.jpg",
    stories: [
      { id: "s1", type: "image", mediaUrl: "/media/story1.jpg" },
      { id: "s2", type: "image", mediaUrl: "/media/story2.jpg" },
    ],
  },
  {
    userId: "2",
    username: "Chandana",
    profilePic: "/avatars/user2.jpg",
    stories: [
      { id: "s1", type: "image", mediaUrl: "/media/story2.jpg" },
      { id: "s2", type: "image", mediaUrl: "/media/story1.jpg" },
    ],
  },
];

export default function StoriesStrip() {
  const [selectedStory, setSelectedStory] = useState<StoryUser | null>(null);

  return (
    <>
      <div className="flex space-x-4 p-4 overflow-x-auto">
        {storiesData.map((user) => (
          <div
            key={user.userId}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedStory(user)}
          >
            <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 to-yellow-500">
              <Image
                src={user.profilePic}
                alt={user.username}
                width={64}
                height={64}
                className="rounded-full border-2 border-black object-cover"
              />
            </div>
            <p className="text-xs mt-1">{user.username}</p>
          </div>
        ))}
      </div>

      {/* Show Story Viewer When Clicked */}
      {selectedStory && (
        <StoryViewer user={selectedStory} onClose={() => setSelectedStory(null)} />
      )}
    </>
  );
}
