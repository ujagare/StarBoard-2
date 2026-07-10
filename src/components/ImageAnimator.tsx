"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ImageAnimator() {

  useGSAP(() => {
    // Select all elements with the class 'image' within the document
    const images = gsap.utils.toArray<HTMLElement>(".image");
    
    images.forEach((img) => {
      gsap.from(img, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: img,
          start: "top 80%"
        }
      });
    });

    // Select all elements with the class 'line' for paragraph animations
    const lines = gsap.utils.toArray<HTMLElement>(".line");
    
    lines.forEach((line) => {
      gsap.from(line, {
        y: 30, 
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 85%"
        }
      });
    });
  }); // no scope restricts it, acts globally

  return null;
}
