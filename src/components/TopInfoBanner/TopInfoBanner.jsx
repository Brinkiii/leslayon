import { deepPurple } from "@mui/material/colors";
import { useState } from "react";
import "./TopInfoBanner.css";

export default function TopInfoBanner() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <div className="topinfobanner">
          <div></div>
          <p>
            Sign up and GET 20% OFF for your first order.{" "}
            <a href="/" style={{ color: deepPurple }}>
              Sign up now
            </a>
            <button onClick={() => setShow(false)}>X</button>
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
