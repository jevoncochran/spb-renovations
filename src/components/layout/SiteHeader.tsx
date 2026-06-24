"use client";

import { useEffect, useRef, useState } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function SiteHeader() {
  const topBarRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [topBarHeight, setTopBarHeight] = useState(0);

  useEffect(() => {
    if (topBarRef.current) {
      setTopBarHeight(topBarRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out"
      style={{
        transform: scrolled
          ? `translateY(-${topBarHeight}px)`
          : "translateY(0)",
      }}
    >
      <div ref={topBarRef}>
        <TopBar />
      </div>
      <Navbar scrolled={scrolled} />
    </div>
  );
}
