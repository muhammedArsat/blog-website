import React, { useState } from "react";
import Editor from "../components/Editor";
import { useCreateBlockNote } from "@blocknote/react";
import PostDialog from "../components/PostDialog";

const Write = () => {
  const editor = useCreateBlockNote();

  const [blog, setBlog] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleSave=()=>{
    console.log(blog)
  }
  return (
    <div className="w-full ">
      <div className="flex justify-end items-center pr-4">
        <button
          onClick={handleDialog}
          className="bg-violet-500 hover:bg-violet-400 active:bg-violet-600 cursor-pointer transition-all text-white px-8 py-2 rounded-lg"
        >
          Post
        </button>
      </div>

      <input
        type="text"
        className="heading_input md:pl-12 "
        placeholder="Blog Title"
      />
      <Editor content={blog} setContent={setBlog} editor={editor} />

      <div
        className={`fixed top-[4rem] md:left-[200px] inset-0 bg-white/10 backdrop-blur-3xl flex justify-center items-center ${
          isDialogOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } `}
        onClick={handleSave}
      >
        <div onClick={(e)=>e.stopPropagation()}>
          <PostDialog handleClose={handleDialog} handleSave={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default Write;
