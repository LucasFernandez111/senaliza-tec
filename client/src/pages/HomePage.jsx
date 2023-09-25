import React, { useContext, useEffect } from "react";
import NavBar from "../components/components-pract-page/NavBar";
import HomeCont from "../components/components-home-page/HomeCont";
import "animate.css";
import { UserContext } from "../context/UserProvider";

export default function HomePage() {
  const { resetBarr } = useContext(UserContext);

  useEffect(() => {
    resetBarr()
  }, []);

  return (
    <div className="home-page animate__animated animate__fadeIn">
      <NavBar></NavBar>

      <HomeCont></HomeCont>
    </div>
  );
}
