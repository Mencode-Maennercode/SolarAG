"use client";

import { useEffect } from "react";
import Userback from "@userback/widget";

export default function UserbackWidget() {
  useEffect(() => {
    // Initialize Userback widget
    const initUserback = async () => {
      try {
        await Userback("A-tc5O0YSbbnOSxkjx6ACydsgYP");
      } catch (error) {
        console.error("Failed to initialize Userback:", error);
      }
    };

    initUserback();
  }, []);

  return null; // This component doesn't render anything visible
}
