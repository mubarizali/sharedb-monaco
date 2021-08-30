import React, { useRef, useEffect } from "react";
import StringBinding from "sharedb-string-binding";
import Connection from "./Connection";
function TextArea() {
  const textRef = useRef(null);
  useEffect(() => {
    if (textRef.current) {
      var doc = Connection.get("examples", "textarea");
      doc.subscribe(function (err) {
        if (err) throw err;

        var binding = new StringBinding(textRef.current, doc, ["content"]);
        binding.setup();
      });
    }
  }, []);
  return <textarea ref={textRef} defaultValue={"Hey"}></textarea>;
}

export default TextArea;
