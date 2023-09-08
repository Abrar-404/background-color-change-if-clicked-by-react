import { useState } from "react"
import image from './dafoe.png'

export default function Tomato() {
  const [color, setBg] = useState("bg-color");

  const bgColor = () => {
    if (color === 'bg2') {
      setBg('bg-color')
    }
    if (color === "bg-color") {
      setBg('bg2')
    }
  }

  return (
    <>
      <div className={color}>
        <div>
         
          <img onClick={bgColor} src={image} alt="" />
      </div>
      </div>
    </>
  );
}