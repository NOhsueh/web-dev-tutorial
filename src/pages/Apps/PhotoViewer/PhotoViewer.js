import { DatePicker, Image, Space, BackTop } from 'antd';
import React, { useState, useEffect } from 'react';
import Navigation from '../../../components/Header/Navigation';
import './PhotoViewer.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://43.143.171.145:8080';
const baseURL = 'http://43.143.171.145:8080';




export default function PhotoViewer() {
  const [photos, setPhotos] = useState([]);

  const loadPhoto = (date, dateString) => {
    axios.get('/loadPhoto', {
      params: {
        time: dateString,
      }
    })
      .then(function (response) {
        setPhotos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        console.log(date);
      });
  };

  useEffect(() => {
    loadPhoto(null, null);
    return;
  }, []);

  let Images = photos.map((photo, index) => {
    return (
      <Image
        loading='lazy'
        key={index}
        height={180}
        width={177}
        src={baseURL + photo.file}
        style={{ borderRadius: '7%', padding: '4px 4px 4px 4px', }}
      />
    );
  })

  return (
    <div>
      <Navigation />
      <Space direction='vertical' style={{ margin: '20px 20px 20px 20px', }}>
        <DatePicker onChange={loadPhoto} style={{ marginLeft: '50px', }} />
        <Image.PreviewGroup >
          {Images}
        </Image.PreviewGroup>
      </Space>
      <BackTop >
        <div className='BackTop'>UP</div>
      </BackTop>
    </div>
  );
};