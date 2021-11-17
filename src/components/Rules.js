import React, { useState } from "react";

function Rules() {
  const [isRuleHidden, setIsRuleHidden] = useState(true);

  const toggleRuleHandler = () => {
    setIsRuleHidden(!isRuleHidden);
  };

  return (
    <div className="rules">
      <h3 style={{ cursor: "pointer" }} onClick={toggleRuleHandler}>
        {isRuleHidden ? "Show" : "Hide"} rules
      </h3>
      <p
        style={{
          paddingLeft: "10px",
          display: isRuleHidden ? "none" : "block",
        }}
      >
        Try to guess the pattern, in both order and color, within ten turns.
        After submitting a row, a small black peg is placed for each code peg
        from the guess which is correct in both color and position. A white peg
        indicates the existence of a correct color code peg placed in the wrong
        position. More info on{" "}
        <a
          href="https://en.wikipedia.org/wiki/Mastermind_(board_game)"
          target="blank"
          style={{ color: "#1A8D7C" }}
        >
          Wikipedia
        </a>
        .
      </p>
    </div>
  );
}

export default Rules;
