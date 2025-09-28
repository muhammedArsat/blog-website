import React, { useEffect } from "react";
import { useCreateBlockNote, useEditorChange } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

function Editor({ content, setContent, editor }) {
  const onChange = async () => {
    // Converts the editor's contents from Block objects to HTML and store to state.
    const html = await editor.blocksToHTMLLossy(editor.document);
    setContent(html);
  };

  useEffect(() => {
    onChange();
  }, []);

  return (
    <div
      style={{ minHeight: "300px", width: "90%", padding: "1px" }}
     className="editor-wrapper"
    >
      <BlockNoteView
        editor={editor}
        theme="light"
        style={{ height: "90%", background: "white", paddingLeft:"1px" }}
        onChange={onChange}
      />
    </div>
  );
}

export default Editor;
