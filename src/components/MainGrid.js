import React from "react";
import TextInput from "./TextInput";

const MainGrid = () => {
  const rows = Array.from({ length: 9 }, (_, i) => i); // Generate 9 rows
  const columns = Array.from({ length: 9 }, (_, i) => i); // Generate 9 columns

  return (
    <div className="mx-auto">
      {rows.map((row) => (
        <div key={row} className="flex gap-1">
          {columns.map((col) => (
            <TextInput key={col} className="input-grid" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MainGrid;
