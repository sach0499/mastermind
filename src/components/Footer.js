import React from "react";

function Footer() {
  return (
    <div className="bottom-section">
      <p style={{paddingLeft: '30px'}}>
        Github Repo:{" "}
        <a href="https://github.com/sach0499/mastermind-clone" target="blank" style={{ color: "#1A8D7C" }}>
          Mastermind.
        </a>
      </p>
      <p style={{paddingLeft: '30px'}}>
        <a href="https://github.com/sach0499/" target="blank" style={{ color: "#1A8D7C" }}>
          © Sachin Pandey
        </a>
      </p>
    </div>
  );
}

export default Footer;