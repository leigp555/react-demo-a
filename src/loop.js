import React from "react";
const App =()=>{
   return (
    <div>
    <span>你好</span>
   <Component number={[1,2,3,4]} />
   <hr/>
   <Component2 number={[1,2,3,4]} />
    </div>
   )
}
const Component =(option)=>{
    const xxx=option.number.map((item,index)=><li key={index}>{item}</li>) 
    return xxx
}
const Component2 =(option)=>{
    const arr=[]
    for(let i=0;i<option.number.length;i++){
     arr.push(<li key={i}>{option.number[i]}</li>)
    }
    return arr
}
export default App