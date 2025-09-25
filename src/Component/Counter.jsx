import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(100);

  // 1. 컴포넌트가 최초 렌더링 되는 경우에 실행되는 useEffect 함수를 구현하세요. (마운트)
  // 최조 렌더링만 되는 경우는 2번째 인자에 빈배열을 생성함.
  useEffect(() => {
    console.log("컴포넌트가 마운트됨!");
  }, []);

  // 2. 컴포넌트가 리렌더링 되는 경우에 실행되는 useEffect 함수를 구현하세요. (업데이트)
  // 값이 바뀔때마다 리렌더링 실행. 아무것도 주지 않는다.
  useEffect(() => {
    console.log("리렌더링됨!");
  });

  // 3. counter2 값이 변경되는 경우에 실행되는 useEffect 함수를 구현하세요. (특정 값 업데이트)
  // 특정 값만 업데이트를 하려면 두번째 인자 배열에 특정값을 넣는다.
  useEffect(() => {
    console.log(`counter2 값이 변경됨`);
  }, [counter2]);

  // 4. 클린업 함수를 작성하세요. (언마운트)
  // 클린업 함수를 사용하려면 return 함수를 사용함과 동시에 두 번째 인자에 빈배열을 선언함.
  useEffect(() => {
    return () => {
      console.log("언마운트 진행.");
    };
  }, []);

  return (
    <section>
      <div>
        <div>counter : {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>증가</button>
      </div>
      <div>
        <div>counter : {counter2}</div>
        <button onClick={() => setCounter2(counter2 - 1)}>감소</button>
      </div>
    </section>
  );
}

export default Counter;
