import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    if(location.hash === "#categories"){
      window.scrollTo(0, 300);
    }else if(location.hash === "Hats/"){}
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;