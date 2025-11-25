import { UserStory } from "../types/story";

export const stories: UserStory[] = [
  {
    userId: "u1",
    username: "Sohail",
    avatarUrl: "/avatars/user1.jpg",
    stories: [
      {
        id: "s1",
        mediaUrl: "/media/story1.jpg",
        type: "image",
        timestamp: "2025-01-01T12:00:00Z",
      },
      {
        id: "s2",
        mediaUrl: "/media/story2.mp4",
        type: "video",
        timestamp: "2025-01-01T12:02:00Z",
      }
    ]
  }
];
