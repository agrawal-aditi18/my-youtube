import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Music",
  "Mixes",
  "Live",
  "Satsang",
  "Sports",
  "Gaming",
  "Computer Programming",
  "Flute",
  "Lo-fi",
  "Mantras",
  "Albums",
  "Classical",
  "Recently uploaded",
  "Watched",
  "New to you",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonList.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
