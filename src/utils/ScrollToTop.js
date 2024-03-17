import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This function makes sure that when you go to a different page, you start at the top
export default function ScrollToTop() {
  const { location } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

// This function is for the "Scroll to Top" button
export function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  return null;
}