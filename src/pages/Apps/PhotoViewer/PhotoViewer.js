import { DatePicker, Image, Space, BackTop, Cascader } from 'antd';
import React, { useState, useEffect } from 'react';
import Navigation from '../../../components/Header/Navigation';
import './PhotoViewer.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://43.143.171.145:8080';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default function PhotoViewer() {
  useEffect(() => {
    loadPhoto(null, null);
    return;
  }, []);
  
  const [photos, setPhotos] = useState([]);

  const loadPhoto = (date, dateString) => {
    console.log('date'+date)
    console.log('dateString'+dateString)

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

  let Images = photos.map((photo, index) => {
    return (
      <Image
        loading='lazy'
        key={index}
        height={180}
        width={174}
        src={axios.defaults.baseURL + photo.file}
        style={{ borderRadius: '7%', padding: '3px', }}
      />
    );
  })

  return (
    <div>
      <Navigation />
      <Space direction='vertical' style={{ margin: '30px', }}>
        <Space>
          <DatePicker onChange={loadPhoto}  style={{ margin: '11.5px', }}/>
          <Cascader options={options} onChange={loadPhoto} placeholder="Please select" />
        </Space>

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