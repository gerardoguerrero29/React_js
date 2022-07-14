import React from "react";

export default function Test() {
  function handleClick(e,id) {
    console.log(e)
    alert(`handle click en:` + id);
    console.log(id)
  }

  return (
    <div onClick={(e)=> {handleClick(e,1)}} style={{ border: "1px solid red" }}>
      Test 
    </div>
  );
}
