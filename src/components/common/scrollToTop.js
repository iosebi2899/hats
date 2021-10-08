import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location)
    if(location.pathname === "/hats-deploy/Hats"){
      window.scrollTo(0, 0);
    }
    else if(location.hash === "/hats-deploy/#categories"){
      window.scrollTo(0, 550);
    }
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;