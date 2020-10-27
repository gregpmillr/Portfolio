import React, { useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";

const Admin = () => {
  const [content, setContent] = useState("");
  const handleEditorChange = (content, editor) => {
    setContent(content);
  }

  const onSubmit = () => {
    const body = {
      content
    };
    console.debug(body);
    axios.post("http://localhost:8080/post", body)
      .then(() => {
        console.debug("success")
      })
      .catch(err => {
        console.debug(err);
      })
  }

  const onDiscard = () => {
    console.debug("discard")
  }

  return (
    <>
      <Editor
        id="editor"
        initialValue="<p>This is the initial content of the editor</p>"
        apiKey="9c25oo520sw89ieq80brjufk62corkqblol4420sn808a1i0"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help'
        }}
        value={content}
        onEditorChange={handleEditorChange}
      />
      <input type="submit" onClick={onSubmit} value="Submit" />
      <input type="submit" onClick={onDiscard} value="Discard" />
    </>
  )
}

export default Admin;