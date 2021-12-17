export const formatDate = (date: Date) =>
  date.toLocaleDateString('en', {
    day: 'numeric',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    month: 'long',
    year: 'numeric',
  });
