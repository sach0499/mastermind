import React from "react";

import Hint from "./Hint";

function Hints({ blockHintsState }) {
  return (
    <div className="hint-container">
      {blockHintsState.map((hintState, hintId) => (
        <Hint hintState={hintState} key={hintId} />
      ))}
    </div>
  );
}

export default Hints;
