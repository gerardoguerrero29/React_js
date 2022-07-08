import React from "react";

export default function TestEventos() {
  function handleClick(e,id) {
    console.log(e)
    alert(`handle click en:` + id);
    console.log(id)
  }

  return (
    <div onClick={(e)=> {handleClick(e,1)}} style={{ border: "1px solid red" }}>
      TestEventos

holaaaaaaa

    </div>
  );
}
