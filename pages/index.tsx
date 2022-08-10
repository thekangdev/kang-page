import type { NextPage } from "next";

import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "next/image";

const Editor = () => {
  const editor = useEditor({
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
  return (
    <>
      <div className="header">
        <Image src={"/kang-logo.png"} width={40} height={40} />
      </div>
      <div className="root-element">
        <Editor />
      </div>
    </>
  );
};

export default Home;
