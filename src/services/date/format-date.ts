export const formatDate = (date: Date) =>
  date.toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
