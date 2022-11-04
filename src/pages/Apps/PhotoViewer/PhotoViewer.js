import { DatePicker, Image, Space, BackTop, Cascader } from 'antd';
import React, { useState, useEffect } from 'react';
import Navigation from '../../../components/Header/Navigation';
import './PhotoViewer.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://43.143.171.145:8080';

const options = [
  {
    value: '重庆市',
    label: 'Chongqing',
    children: [
      {
        value: '沙坪坝区',
        label: 'Shapingba',
        children: [
          {
            value: '大学城西路',
            label: 'Daxuechengxilu',
          },
        ],
      },
    ],
  },
];

export default function PhotoViewer() {
  useEffect(() => {
    document.title='照片浏览器';
    return;
  });

  const [photos, setPhotos] = useState([]);
  const [info, setInfo] = useState({
    time: '1970-01-01',
    city: '',
    direction: '',
    distance: '',
    district: '',
    province: '',
    street: '',
    street_number: ''
  });

  const changeTime = (_, dateString) => {
    setInfo(info.time = dateString);
    loadPhoto();
  };

  const changeAddress = (addressList) => {
    setInfo(
      info.province = addressList[0]
    );
    loadPhoto();
  };

  const loadPhoto = () => {
    axios.get('/loadPhoto', {
      params: {
        time: info.time,
        city: info.city,
        direction: info.direction,
        distance: info.distance,
        district: info.district,
        province: info.province,
        street: info.street,
        street_number: info.street_number,
      }
    })
      .then(function (response) {
        setPhotos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  let Images = photos.map(async (photo, index) => {
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
          <DatePicker
            onChange={changeTime}
            style={{ margin: '11.5px', }}
          />
          <Cascader
            options={options}
            onChange={changeAddress}
            placeholder="Please select" />
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