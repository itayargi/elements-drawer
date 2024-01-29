import React from "react";

const InputElement = ({ element }) => {
  return (
    <div
      style={{
        gridRow: element.line,
        gridColumn: element.column,
      }}
      className="element"
    >
      <label>{element.label}</label>
      {element.type === "TEXT_INPUT" && (
        <input type="text" placeholder={element.value || "Enter value"} />
      )}
      {element.type === "SELECT" && (
        <select>
          {Array.isArray(element.value) ? (
            element.value.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))
          ) : (
            <option value={element.value}>{element.value}</option>
          )}
        </select>
      )}
    </div>
  );
};

export default InputElement;
