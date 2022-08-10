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
        placeholder: `Start typing...`,
      }),
    ],
    content: `<p>Start typing...</p>`,
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
