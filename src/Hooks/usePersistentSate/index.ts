import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: any) {
  const saved: string | null = localStorage.getItem(key);
  if (saved) {
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  }else {
    return defaultValue
  }
}

export default function usePersistedState(key: string, defaultValue: any) {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
