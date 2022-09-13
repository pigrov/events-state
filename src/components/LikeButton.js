import React, { useState } from "react";

function LikeButton(props) {
  const [clicks, setClicks] = useState(0);
  const handleClick = (evt) => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  return <button onClick={handleClick}>Click me: {clicks}</button>;
}

export default LikeButton;
