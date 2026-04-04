"use client";
import { useEffect } from "react";

export default function FontLoader() {
  useEffect(() => {
    document.fonts.ready.then(() => {
      document.body.classList.add("fonts-loaded");
    });
  }, []);

  return null;
}
