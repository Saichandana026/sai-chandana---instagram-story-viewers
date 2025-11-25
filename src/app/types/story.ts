export interface StoryContent {
  id: string;
  type: "image" | "video";   // defines the type of media
  mediaUrl: string;          // path to image/video stored inside public folder
  viewedBy?: string[];       // store userIds of who viewed this story
}

export interface UserStory {
  userId: string;
  username: string;
  profilePic: string;
  stories: StoryContent[];
}
