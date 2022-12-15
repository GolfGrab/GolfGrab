import Router from "next/router";
import { useEffect } from "react";

const Notfound = () => {
  useEffect(() => {
    console.log("404 not found redirecting to home");
    Router.push("/");
  }, []);

  return <div>Notfound</div>;
};

export default Notfound;
