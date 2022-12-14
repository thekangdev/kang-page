import type { NextPage } from "next";
import Head from "next/head";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";
import useDarkMode from "../utils/hooks/useDarkMode";

const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "h-40",
      },
    },
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: `Nothing is saved. Everything is destroyed once you refresh or close the tab. So make sure to copy your work once you are done. Start writing...`,
      }),
    ],
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
