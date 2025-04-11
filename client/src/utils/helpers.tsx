export const removeCookie = (name: string) => {
  document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export const getCookie = (name: string) => {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin === -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }

  return decodeURI(dc.substring(begin + prefix.length));
}

export const generateRandomMD5 = () => {
  const randomHex = Array.from({ length: 32 }, () => {
    return Math.floor(Math.random() * 16).toString(16);
  }).join('');

  return randomHex;
}

export const formatDate = (date: Date, format: string): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return format.replace('YYYY', year.toString()).replace('MM', month).replace('DD', day);
};

export const formatDateToString = (date: Date, format: string = 'MMMM dd, yyyy'): string => {
  const options: Intl.DateTimeFormatOptions = {};

  if (format.includes('MMMM')) {
    options.month = 'long';
  } else if (format.includes('MMM')) {
    options.month = 'short';
  }

  if (format.includes('dd')) {
    options.day = '2-digit';
  } else if (format.includes('d')) {
    options.day = 'numeric';
  }

  if (format.includes('yyyy')) {
    options.year = 'numeric';
  } else if (format.includes('yy')) {
    options.year = '2-digit';
  }

  if (format.includes('hh') || format.includes('mm') || format.includes('ss') || format.includes('a')) {
    options.hour = '2-digit';
    options.minute = '2-digit';
    options.second = format.includes('ss') ? '2-digit' : undefined;
    options.hour12 = format.includes('a');
  }

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export const getRandomElement = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const getRandomDate = (): Date => {
  const start = new Date(2023, 0, 1).getTime();
  const end = new Date().getTime();
  return new Date(start + Math.random() * (end - start));
};

export const camelToProperCase = (str: string): string => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
};
