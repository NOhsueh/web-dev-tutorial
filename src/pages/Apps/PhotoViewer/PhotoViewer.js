import { DatePicker, Image, Space, BackTop, Cascader, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import Navigation from '../../../components/Header/Navigation';
import './PhotoViewer.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://43.143.171.145:8080';

const options = [
  {
    value: '重庆市',
    label: '重庆市',
    children: [
      {
        value: '重庆市',
        label: '重庆市',
        children: [
          {
            value: '沙坪坝区',
            label: '沙坪坝区',
            children: [
              {
                value: '大学城西路',
                label: '大学城西路',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function PhotoViewer() {
  useEffect(() => {
    document.title = '照片浏览器';
  }, []);

  const [reverse, setReverse] = useState(false);
  const [info, setInfo] = useState({
    time: "1970-01-01",
    city: "",
    direction: "",
    distance: "",
    district: "",
    province: "",
    street: "",
    street_number: "",
  });
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    loadPhoto(info);
  }, [info])
  useEffect(() => {
    photos.reverse();
  }, [reverse, photos])

  const timeChanged = (_, dateStirng) => {
    if (dateStirng === '') {
      dateStirng = '1970-01-01';
    }
    setInfo(info => ({
      ...info,
      time: dateStirng,
    }));
  }
  const addressChanged = (addressString) => {
    if (addressString === undefined) {
      addressString = ['', '', '', ''];
    }
    setInfo(info => ({
      ...info,
      province: addressString[0],
      city: addressString[1],
      district: addressString[2],
      street: addressString[3]
    }));
  }

  const loadPhoto = async (info) => {
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

  let Images = photos.map((photo, index) => {
    return (
      <Image
        title={photo.time + '\n' + photo.province + photo.city + photo.district + photo.street}
        loading='lazy'
        key={index}
        height={180}
        width={(document.body.clientWidth - 35) / 7}
        src={axios.defaults.baseURL + photo.file}
        style={{ borderRadius: '7%', padding: '3px', }}
      />
    );
  })

  return (
    <div>
      <Navigation />
      <div style={{ textAlign: 'center', }}>
        <Space style={{ margin: '23px', textAlign: 'left', }}>
          🥰
          <DatePicker
            onChange={timeChanged}
          />
          <Cascader
            options={options}
            onChange={addressChanged}
            placeholder="Select address"
          />
          <Button
            type="primary"
            onClick={() => setReverse(reverse => !reverse)}
          >
            Reverse
          </Button>
        </Space>
      </div>
      <Space
        direction='vertical'
        style={{ margin: '17px', }}>
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