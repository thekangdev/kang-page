import type { NextPage } from "next";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import useDarkMode from "../utils/hooks/useDarkMode";
import React from "react";

const Editor = () => {

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "h-40",
      },
    },
    extensions: [
      StarterKit,
      // Placeholder.configure({
      //   placeholder: `Nothing is saved. Everything is destroyed once you refresh or close the tab. So make sure to copy your work once you are done. Start writing...`,
      // }),
    ],

    content: typeof window !== 'undefined' ?
      `${localStorage.getItem("content")}` === 'null'
        ? 'Remove this line to write your content here...' : `${localStorage.getItem("content")}` : 'REmove this line to write your content here...',

    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      localStorage.setItem("content", html)
    },
  });

  return <EditorContent editor={editor} />;
};

const Home: NextPage = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <>
      <div className="header p-4 flex justify-between align-middle">
        <div className="logo">
          <Image src={"/kang-logo.png"} width={40} height={40} />
        </div>
        <div className="nav-controls">
          <button
            className="control-btn p-2"
            onClick={() => setTheme(colorTheme)}
          >
            {colorTheme === "dark" ? "go dark" : "light it up"}
          </button>
        </div>
      </div>
      <div className="root-element">
        <Editor />
      </div>
    </>
  );
};

export default Home;
