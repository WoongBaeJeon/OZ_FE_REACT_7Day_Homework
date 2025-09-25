import "./App.css";
import Counter from "./Component/Counter";
import CounterClass from "./Component/CounterClass";
import { useState } from "react";

// 과제를 모두 작성하셨다면, 개발자도구 콘솔창을 통해 결과를 확인하세요.
// 증가, 감소, Show 버튼을 각각 클릭한 뒤 결과를 확인하세요.
function App() {
  const [showCounter, setShowCounter] = useState(false);
  const [showClassCounter, setshowClassCounter] = useState(false);
  return (
    <>
      {showCounter && <Counter />}
      <br />
      <button className="show-btn" onClick={() => setShowCounter(!showCounter)}>
        함수_Show?
      </button>
      {/* {showClassCounter && <CounterClass />}
      <br />
      <button
        className="show-btn"
        onClick={() => setshowClassCounter((prev) => !prev)}
      >
        Class_Show?
      </button> */}
    </>
  );
}

export default App;
