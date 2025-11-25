export const useViewTracking = (storyId: string, viewerId: string) => {
  if (typeof window === "undefined") return;

  const raw = sessionStorage.getItem("storyViews");
  const data = raw ? JSON.parse(raw) : {};

  if (!data[storyId]) data[storyId] = [];
  if (!data[storyId].includes(viewerId)) {
    data[storyId].push(viewerId);
  }

  sessionStorage.setItem("storyViews", JSON.stringify(data));
};
