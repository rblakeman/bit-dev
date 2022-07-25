import { useState, useEffect } from 'react';

const isTopWindowAccessible = () => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    window.top?.location.host;
    return true;
  } catch (err) {
    return false;
  }
};

function getStorageValue(key: string, defaultValue: any) {
  const saved = localStorage.getItem(key);
  if (saved) {
    return JSON.parse(saved);
  }
  return defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    if (!isTopWindowAccessible()) return defaultValue;
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    if (isTopWindowAccessible()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};
