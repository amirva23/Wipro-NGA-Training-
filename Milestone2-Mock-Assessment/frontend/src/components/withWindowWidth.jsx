import React, { useState, useEffect } from "react";

export default function withWindowWidth(WrappedComponent) {
  return function WindowWidthComponent(props) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <WrappedComponent {...props} windowWidth={width} />;
  };
}
