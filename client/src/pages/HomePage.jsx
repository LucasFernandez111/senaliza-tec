import React, { useContext, useEffect } from "react";
import NavBar from "../components/components-pract-page/NavBar";
import HomeCont from "../components/components-home-page/HomeCont";
import "animate.css";
import { UserContext } from "../context/UserProvider";

export default function HomePage() {
  const { reset } = useContext(UserContext);

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="home-page animate__animated animate__fadeIn">
      <NavBar></NavBar>

      <HomeCont></HomeCont>
    </div>
  );
}
