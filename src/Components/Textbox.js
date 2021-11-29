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

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnPress = (e) => {
    let a = text.split(/\s+/).filter((element) => {
      return element.length !== 0;
    });

    if (e.key === "Enter" && a.length > 0) {
      e.preventDefault();
      a = a.join(" ");
      let b = [...arr, a];
      setArr(b);
      setText("");
    }
  };

  const showBullets = () => {
    // TODO : COMPLETE THIS showBullets WHICH RETURNS THE LIST OF ALL ADDED ITEMS
    /*
      Each row should look like
        <tr>
          <th data-testid = {id} ></th>
        </th>

      where id is `row-{index}`,  possible value of index is 0,1,2,3,4,5
      Please note that the component has the data-testid attributes for test cases and certain classes and ids for rendering purposes.
      Adding them is necessary
    */

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
            onKeyPress={handleOnPress}
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

        <table style={{ border: "2px solid black", width: "100%" }}>
          <tbody>
            {showBullets()}
          </tbody>
        </table>
      </div>
    </>
  );
}
