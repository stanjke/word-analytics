export const calculateLastActivity = (lastEditedDate) => {
  const now = Date.now();
  const deltaInMinutes = Math.floor((now - lastEditedDate) / 1000 / 60);
  let deltaInHours = null;
  let deltaInDays = null;

  if (deltaInMinutes <= 0) {
    return 'just now';
  }

  if (deltaInMinutes >= 60) {
    deltaInHours = Math.floor(deltaInMinutes / 60);
    if (deltaInHours < 24) {
      return `${deltaInHours} hours ago`;
    }
  }

  if (deltaInHours >= 24) {
    deltaInDays = Math.floor(deltaInHours / 24);
    if (deltaInDays < 365) {
      return `${deltaInDays} days ago`;
    }
  }

  return `${deltaInMinutes} minutes ago`;
};
