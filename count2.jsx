import { useState } from "react"

export default function Count2() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handleRemove = () => {
    const reduceCount = count - 1;
    setCount(reduceCount);
  }
  return (
    <div className="box">
      <h2>Counts: {count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Reduce</button>
    </div>
  )
}