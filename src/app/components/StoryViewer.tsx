"use client";

import { useState, useEffect } from "react";
import StoryProgress from "./StoryProgress";
import { UserStory } from "../types/story";


interface Props {
  user: UserStory;
  onClose: () => void;
}

export default function StoryViewer({ user, onClose }: Props) {
  const [current, setCurrent] = useState(0);

  const nextStory = () => {
    if (current < user.stories.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      onClose(); // close viewer at end
    }
  };

  const previousStory = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextStory();
    }, 5000);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex justify-center items-center">
      {/* Top Progress Bar */}
      <div className="absolute top-4 w-full max-w-md z-50">
        <StoryProgress count={user.stories.length} current={current} />
      </div>

      {/* Tap Areas */}
      <div className="absolute inset-0 flex z-40">
        <button
          aria-label="Previous Story"
          className="w-1/2 h-full"
          onClick={previousStory}
        ></button>
        <button
          aria-label="Next Story"
          className="w-1/2 h-full"
          onClick={nextStory}
        ></button>
      </div>

      {/* Story Content */}
      <div className="relative z-30 flex justify-center items-center">
        {user.stories[current].type === "image" ? (
          <img
            src={user.stories[current].mediaUrl}
            className="max-h-screen max-w-full object-contain"
          />
        ) : (
          <video
            src={user.stories[current].mediaUrl}
            autoPlay
            muted
            controls={false}
            className="max-h-screen max-w-full object-contain"
          />
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl font-bold z-50"
      >
        ✕
      </button>
    </div>
  );
}
