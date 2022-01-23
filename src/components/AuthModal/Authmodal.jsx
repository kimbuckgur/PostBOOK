import React, { useState } from "react";
import Loginmodal from "./Loginmodal";
import Signmodal from "./Signmodal";

function Authmodal() {
  const [test, setTest] = useState(true);
  const [on, seton] = useState(true);
  return (
    <div>
      {test ? <>{on ? <Loginmodal/> : <Signmodal />}</> : <></>}:
    </div>
  );
}

export default Authmodal;
