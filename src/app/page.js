"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const text = "Welcome to my project! Advait Gendu";
  const [displayedText, setDisplayedText] = useState("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const token = false;
  // localStorage.getItem("token");

  useEffect(() => {
    if (currentLetterIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[currentLetterIndex] + " ");
        setCurrentLetterIndex(currentLetterIndex + 1);
      }, 100); // Adjust the delay (100ms) for faster/slower animations

      return () => clearTimeout(timeout);
    }
  }, [currentLetterIndex, displayedText, text]);
  return (
    <div className="text-center min-h-screen  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center mt-10">
        {displayedText.split("").map((letter, index) => (
          <span
            key={index}
            className="inline-block transition-opacity duration-500 ease-in"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
      {!token && (
        <Button
          variant="outlined"
          sx={{ mt: 3 }}
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      )}
    </div>
  );
}
