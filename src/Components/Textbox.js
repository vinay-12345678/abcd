import React from "react";
import { useState } from "react";

export default function Textbox() {
  const [arr, setArr] = useState([]);
  const [text, setText] = useState("");

  const clearAll = () => {
    setText("");


  };

  const add = () => {
    // TODO: IMPLEMENT THIS ADD FUNCTION , RESPONSIBLE FOR ADDING THE TEXT ITEM IN PREVIEW TABLE 

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

  const showBullets = () => {
    // TODO : COMPLETE THIS showBullets WHICH RETURNS THE LIST OF ALL ADDED ITEMS
    /*
      Each row should look like
          <div className="alert alert-primary">
            <span data-testid={id}></span>
          </div>

      where data-testid is `row-{index}`,  possible value of index is 0,1,2,3,4,5
      Please note that the component has the data-testid attributes for test cases and certain classes and ids for rendering purposes.
      Adding them is necessary
    */


      let arrr = arr.map((e, index) => {
        let id="row-"+index;
        return (
          <div
            key={index}
            className="alert alert-primary"
          >
            <span data-testid={id} >{e}</span>
    
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
          className="btn btn-primary mx-2 my-1"
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
