import { useEffect, useState } from "react";

type TitleType = {
  fontSize: string;
  text: string;
};

const TitleTyping = (props: TitleType): JSX.Element => {
  return (
    <div className="text-center">
      <h1
        className="title"
        style={{
          fontSize: props.fontSize,
          width: `${props.text.length + 1}ch`,
          animation:
            props.text.length < 10
              ? `type 4s steps(${props.text.length}) infinite alternate , blink .5s infinite step-end alternate`
              : `type 6s steps(${props.text.length}) infinite alternate, blink .5s infinite step-end alternate`,
        }}
      >
        {props.text}
      </h1>
    </div>
  );
};

export default TitleTyping;
