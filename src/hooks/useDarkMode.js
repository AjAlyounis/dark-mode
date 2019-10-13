import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [someValue, setSomeValue] = useLocalStorage("Dark", false);

  const body = document.querySelector("body");

  useEffect(() => {
    if (someValue) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [someValue]);
  return [someValue, setSomeValue];
}
