import React from "react";
import { useState } from "react";

export default function Textbox() {
  const [arr, setarr] = useState([]);
  const [text, setText] = useState("");

  const clearall = () => {
    setText("");
  };

  const add = () => {
    let a = text.split(/\s+/).filter((element) => {
      return element.length !== 0;
    });

    if (a.length > 0) {
      a = a.join(" ");
      let b = [...arr, a];
      setarr(b);
      setText("");
    }
  };

  const handleonchange = (event) => {
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
      setarr(b);
      setText("");
    }
  };

  const showBullets = () => {
    let arrr = arr.map((e, index) => {
      return (
        <tr
          style={{
            border: "1px solid black",
            color: index % 2 === 0 ? "green" : "red",
          }}
        >
          <th>{index + 1 + "."}</th>
          <th>{e}</th>
        </tr>
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
            onChange={handleonchange}
            onKeyPress={handleOnPress}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-danger mx-2 my-1"
          onClick={clearall}
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
          {showBullets()}
        </table>
      </div>
    </>
  );
}
