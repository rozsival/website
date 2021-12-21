export const formatDate = (date: Date) =>
  date.toLocaleDateString('en', {
    day: 'numeric',
    hour12: false,
    month: 'long',
    year: 'numeric',
  });
