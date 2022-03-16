import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {increment, decrement, incrementByAmount } from "./reducers/counterSlice";
import Card from "./cards/CardsMain";
function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  
  return (
    <main>
      <div className="search">
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />

      <h1>Counter {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(incrementByAmount(parseInt(id)))}>
        increase by Ammount
      </button>
      </div>
      <div>
        {count > 0 && <h1>Names:</h1> }
        {count > 0 && <Card />}
      </div>
    </main>
  );
}

export default App;
