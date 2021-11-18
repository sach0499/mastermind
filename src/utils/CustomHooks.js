import { useState, useEffect } from "react";

export function useLocalState(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const localValue = JSON.parse(localStorage.getItem(key));
    if (localValue) {
      setValue(localValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [
    value,
    (newValue) => {
      setValue(newValue);
    },
  ];
}
