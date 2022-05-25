import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

export function Upload() { // yarn add react-drag-drop-files
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
      <div style={{margin: "0 auto"}}>
          <form action="/plagiarism/select">
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} /> <br/>
            <button type="submit" class="btn btn-outline-dark">악보 업로드</button>
          </form>
      </div>
  );
}