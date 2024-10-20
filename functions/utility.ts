export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

// function to check if the file type is an image or not
export const isImage = (filename: string) => {
  if (!filename) return false;
  const ext = filename.split('.').pop();
  if (
    ext === 'jpg' ||
    ext === 'jpeg' ||
    ext === 'png' ||
    ext === 'gif' ||
    ext === 'webp'
  ) {
    return true;
  }
  return false;
};

export const humanReadableDate = (
  date: string | Date,
  format: 'full' | 'day-month' = 'full'
) => {
  const options: Intl.DateTimeFormatOptions =
    format === 'day-month'
      ? { day: 'numeric', month: 'short' }
      : { day: 'numeric', month: 'short', year: 'numeric' };

  return new Date(date).toLocaleDateString('en-US', options);
};

export const humanReadableTime = (date: string | Date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  });
};

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}