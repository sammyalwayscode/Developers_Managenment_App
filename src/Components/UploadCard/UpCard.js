import React, { useEffect, useState } from 'react'
import './UpCard.css'
import vid from '../video/vid.mp4'
import gitlogo from '../Images/gitround.png'
import { app } from '../Base/Base'

const db = app.firestore();
function UpCard() {
  const [uploads, setUploads] = useState([]);

  const getData = async () => {
    await db
      .collection('project')

      .onSnapshot((snap) => {
        const item = [];
        snap.forEach((doc) => {
          item.push(doc.data());
        });
        setUploads(item);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {
        uploads.map(({ avatar, title, content, gitLink }) => (
          <div className='UpMainCard'>
            <video src={avatar} type="video/mp4" autoPlay loop muted className='UpVidDiv' />
            <div className='UpImgTxtHod'>
              <a style={{ zIndex: '999' }} href={gitLink}> <img src={gitlogo} alt='' className='IconDiv' /></a>
              <div className='ProjTitle'> {title} </div>
              <div className='ProjContent'> {content}  </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default UpCard
