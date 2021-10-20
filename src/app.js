import React from "react";
import ReactDOM from "react-dom";
const app = document.querySelector("#app");
let n = 0;
const App = () => {
  return (
    <div className="orange">
      {n}
      <button
        onClick={() => {
          n += 1;
          ReactDOM.render(<App />, app);
        }}
      >
        +1
      </button>
      <Component n={n} />
      <Component2 n={n} />
      <Component3 n={n} />
      <Component4 n={n} />
    </div>
     
  );
};
const Component=(option)=>{
    return option.n%2===0?<div>{option.n}是偶数</div>:<div>{option.n}是奇数</div>
    
}
const Component3=(option)=>{
    const xxx=()=>{
      return  option.n%2===0?<div>{option.n}是偶数</div>:<div>{option.n}是奇数</div>
    }
   return xxx()
}
const Component2=(option)=>{
    const a=  <div>{option.n}是偶数</div>
    const b=  <div>{option.n}是奇数</div>
    if(option.n%2===0){
        return a
    }else{
        return b
    }
}
const Component4=(option)=>{
    const a=  <div>{option.n}是偶数</div>
    const b=  <div>{option.n}是奇数</div>
    const xxx=(
      <div>
          {option.n%2===0?a:b}
      </div>
    )
    return xxx           
}
export default App;
