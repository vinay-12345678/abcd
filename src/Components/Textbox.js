import React from "react";
import { useState,useEffect } from "react";

export default function Textbox() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");

  const clearAll = () => {
    setText("");
  };

  const add = () => {
    let a = text.split(/\s+/).filter((element) => {
      return element.length !== 0;
    });

    if (a.length > 0) {

      a = a.join(" ");

      let b = [...arr, a];
      setArr(b);
      setText("");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };


  const checkboxPressed=(e)=>{
    if((e.currentTarget.parentNode.className).slice(-7)==="striked"){
      e.currentTarget.parentNode.className="alert alert-primary";
    }
    else{
      e.currentTarget.parentNode.className=e.currentTarget.parentNode.className+" striked";
    }

  }

  const showBullets = () => {
    let arrr = arr.map((e, index) => {
      let id="row-"+index;
      return (
        <div
          key={index}
          className="alert alert-primary"
        >
          <span data-testid={id} className={e.isCompleted ? "striked" : "" }>{e}</span>

          <input type="checkbox" id={index} name={index} value="text" onClick={checkboxPressed}></input>

        </div>
      );
    });

    return arrr;
  };

  return (
    <>
      <div className="container my-2">
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            placeholder="Text to be converted...."
            rows="5"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-danger mx-2 my-1"
          onClick={clearAll}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-success mx-2 my-1"
          onClick={add}
        >
          Add
        </button>
      </div>

      <div className="container my-5">
        <h2>Preview</h2>

          <div>
            {showBullets()}
          </div>

      </div>
    </>
  );
}


