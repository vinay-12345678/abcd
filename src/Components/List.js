import React from "react";

export default function List({ arr }) {
  return (
    <div className="container my-5">
      <table style={{ border: "2px solid black", width: "100%" }}>
        {arr.map((e, index) => {
          return (
            <tr style={{ border: "1px solid black", color : index %2===0 ? "green" : "red" }}>
                <th>
                    {index+1+"."}
                </th>
                <th>
                    {e}
                </th>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
