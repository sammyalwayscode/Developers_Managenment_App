import React, { useState } from 'react'
import './ProjUpload.css'
import { Input, Button } from 'antd';
import { app } from '../Base/Base'
import { useHistory } from "react-router-dom";

const db = app.firestore()
function ProjUpload() {

  const hist = useHistory();
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [gitLink, setGitLink] = useState("")
  const [fileUrl, setFileUrl] = useState(null)

  const videoUpload = async (e) => {
    const File = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(File.name);
    console.log(File);

    await fileRef.put(File);
    setFileUrl(await fileRef.getDownloadURL());
  };



  const UploadData = async () => {
    await db
      .collection("project")
      .doc()
      .set({
        title,
        content,
        gitLink,
        date: Date.now(),
        avatar: await fileUrl,
      });
  };

  const { TextArea } = Input;

  return (
    <div className='ProjectUploadControl'>
      <div className='SubProjectUpload'>
        <div className='ProjUploadControl'>
          <div style={{ color: '#ddd' }}>Upload A Short Video Clip</div>
          <input
            onChange={videoUpload}
            className="InputTextAreaDiv"
            type="file"
            style={{ backgroundColor: 'gray' }}
          />


          <Input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type='text'
            placeholder="Title Of Your Project"
            name=" name"
            className="InputTextAreaDiv"
          />


          <TextArea rows={4}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            type='text'
            placeholder='Write A Little Discription'
            className="InputTextAreaDiv"
          />

          <Input
            placeholder='Input Your Ripo Link'
            value={gitLink}
            onChange={(e) => {
              setGitLink(e.target.value)
            }}
            className="InputTextAreaDiv"
          />


          <Button
            onClick={() => {
              UploadData();
              // hist.push("/home")
            }}
            style={{ color: '#fff', fontWeight: 'bold', backgroundColor: '#4081ec' }}
          >
            Upload
          </Button>
        </div>
      </div>
    </div >
  )
}

export default ProjUpload
