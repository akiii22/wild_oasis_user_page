"use client";

import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count < 1 ? count : count - 1)}>
        Decrement
      </button>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
