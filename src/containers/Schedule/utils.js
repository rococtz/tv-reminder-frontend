export const getFormattedTimeDifference = (utcDate, currentDate) => {
  const date = new Date(utcDate);
  const timeDifference = currentDate - date;
  const isLeft = timeDifference < 0 ? true : false;
  const difference = Math.abs(timeDifference);
  const days = Math.floor(difference / 1000 / 3600 / 24);
  const hours = Math.floor(difference / 1000 / 3600 - days * 24);

  let message = '';
  message += days ? `${days} days,` : '';
  message += ` ${hours} hours`;
  message += isLeft ? ' left' : ' ago';
  return message;
};