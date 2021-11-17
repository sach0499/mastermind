import react from "react";

import { ImCross } from "react-icons/im";

function Hint({ hintState }) {
  return (
    <div className={`hint-item ${hintState}`}>
      {hintState === "no-match" ? <ImCross /> : ""}
    </div>
  );
}

export default Hint;
