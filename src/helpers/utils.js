export const setItem = (key, value) => {
  const data = JSON.stringify(value);
  window.localStorage.setItem(key, data);
};

export const getItem = (key) => {
  const value = window.localStorage.getItem(key);

  return value;
};

export const removeItem = (key) => {
  window.localStorage.removeItem(key);
};

export const removeAllItems = () => {
  window.localStorage.clear();
};

export const capitalizeFirstLetter = (letter = '') => {
  return `${letter.charAt(0).toUpperCase()}${letter.substr(1)}`;
};
