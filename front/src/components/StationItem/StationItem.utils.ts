export const formatUpdatedAt = (updatedAt: string) => {
  const date = new Date(updatedAt);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return diffInSeconds === 1 ? `${diffInSeconds} second ago` : `${diffInSeconds} seconds ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return diffInMinutes === 1 ? `${diffInMinutes} minute ago` : `${diffInMinutes} minutes ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return diffInHours === 1 ? `${diffInMinutes} hour ago` : `${diffInHours} hours ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  return diffInDays === 1 ? `${diffInMinutes} day ago` : `${diffInDays} days ago`;
};