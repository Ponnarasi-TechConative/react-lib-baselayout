import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    window.SampleImport({
      dom_id: "#full-screen",
      language: "English",
      config: {
        id: "1234",
        name: "Render from react",
        value: "Save",
      },
    });
  }, []);

  return (
    <>
      <div id="full-screen"></div>
    </>
  );
}

export default App;
