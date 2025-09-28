import React from "react";
import { X } from "lucide-react";
import { Home, BookOpen, Trash, PencilLine, Send } from "lucide-react";
const PostDialog = ({handleClose, handleSave}) => {
  return (
    <div className="max-w-sm shadow-xl rounded-lg bg-white p-2 flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <h3>Details</h3>
        <X strokeWidth={1} onClick={handleClose}/>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="">Description</label>
        <div className="relative flex items-center">
          <PencilLine className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            className="input-base pl-9"
            placeholder="Description"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="">Mins to read</label>
        <div className="relative flex items-center">
          <BookOpen className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            className="input-base pl-9"
            placeholder="Minutes to Read"
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="">Category</label>
        <div className="relative flex items-center">
          <Home className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            className="input-base pl-9"
            placeholder="Travel, Coding, etc..."
          />
        </div>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <button onClick={handleClose} className="flex items-center gap-1 bg-red-500 text-white hover:bg-red-400 active:bg-red-600 cursor-pointer px-4 py-2 rounded-lg">
          Cancel
          <Trash className="w-4 h-4" />

        </button>
        <button onClick={handleSave} className="bg-green-500 text-white hover:bg-green-400 active:bg-green-600 cursor-pointer px-4 py-2 rounded-lg flex items-center gap-1">
          <span>Post</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PostDialog;
