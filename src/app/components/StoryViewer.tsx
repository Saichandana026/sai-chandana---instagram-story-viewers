"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import StoryProgress from "./StoryProgress";

// Create Type Here
type Story = {
  id: string;
  type: string;
  mediaUrl: string;
};

type UserStory = {
  userId: string;
  username: string;
  profilePic: string;
  stories: Story[];
};

interface Props {
  user: UserStory;
  onClose: () => void;
}

export default function StoryViewer({ user, onClose }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (current < user.stories.length - 1) {
        setCurrent((prev) => prev + 1);
      } else {
        onClose();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [current, user.stories.length, onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <button className="absolute top-4 right-4 text-white text-xl" onClick={onClose}>
        ✕
      </button>

      <div className="w-[350px] h-[600px] relative">
        <StoryProgress total={user.stories.length} current={current} />

        <Image
          src={user.stories[current].mediaUrl}
          alt="story"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
