import { useState } from "react"

export default function Counts() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const handleRemove = () => {
    const removeCount = count - 1;
    setCount(removeCount);
  }
  return (
    <div className='box'>
      <h2>Count: {count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      </div>
  )
}