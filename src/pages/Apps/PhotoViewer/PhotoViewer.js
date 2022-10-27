import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { notification, Image } from 'antd';
import React from 'react';
import Navigation from '../../../components/Header/Navigation';
import './PhotoViewer.css';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const loadPhoto = (photo) => {
  axios.get('/loadPhoto', {
    params: {
      time: photo.time,
      city: photo.city,
      direction: photo.direction,
      distance: photo.distance,
      district: photo.district,
      province: photo.province,
      street: photo.street,
      street_number: photo.street_number,
    }
  })
    .then(function (response) {
      openNotification(response.data);
    })
    .catch(function (error) {
      console.log(error);
      openNotification(error.message);
    })
    .then(function () {
      // 总是会执行
    });
};

const openNotification = (check) => {
  if (check === true) {
    notification.open({
      message: 'Successfully uploaded the photo',
      icon: (
        <SmileOutlined
          style={{
            color: '#108ee9',
          }}
        />

      ),
    });
  }
  else if (check === false) {
    notification.open({
      message: 'Failed to upload photo',
      icon: (
        <FrownOutlined
          style={{
            color: '#c92d0a',
          }}
        />
      ),
    });
  }
  else {
    notification.open({
      message: 'Error',
      description:
        check,
      icon: (
        <FrownOutlined
          style={{
            color: '#c92d0a',
          }}
        />
      ),
    });
  }
};

export default function PhotoViewer() {

  return (
    <>
      <Navigation />

      <Image.PreviewGroup>
        <Image
          width={200}
          height={200}
          src="http://localhost:8080/photos/2022-10-26&106.2969&29.597864/IMG_20221026_222807.jpg" />
        <Image
          width={200}
          height={200}
          src="http://localhost:8080/photos/2022-10-26&106.29821&29.594332/IMG_20221026_162430.jpg"
        />
      </Image.PreviewGroup>
    </>
  );
};