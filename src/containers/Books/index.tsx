import React from "react";
import { Button } from "@material-ui/core";
import "./index.css";
export const Books = () => {
  return (
    <div className="Books">
      <header className="Books-header">
        <Button color="secondary" variant="contained">
          Clique Aqui
        </Button>
      </header>
    </div>
  );
};

export default Books;
