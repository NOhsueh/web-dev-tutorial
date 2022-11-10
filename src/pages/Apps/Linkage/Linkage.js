import Navigation from '../../../components/Header/Navigation';
import React, { useState, useEffect } from 'react';
import { Space } from 'antd';
import './Linkage.css';
import axios from 'axios';
axios.defaults.baseURL = 'http://43.143.171.145:8080';


export default function Linkage() {
    useEffect(() => {
        document.title = '省市联动';
        getProvinces();
        return () => document.title = 'Nohsueh';
    }, []);
    const [provinces, setProvince] = useState([]);
    const [cities, setCities] = useState([])

    const getProvinces = async () => {
        axios.get('/provinces')
            .then(function (response) {
                setProvince(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const getCities = async (sel) => {
        axios.get('/cities', {
            params: {
                id: sel.target.value,
            }
        })
            .then(function (response) {
                setCities(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    let provinceOption = provinces.map((province, index) => {
        return (
            <option key={index} value={index + 1}>{province.name}</option>
        );
    })
    let cityOption = cities.map((city, index) => {
        return (
            <option key={index}>{city.name}</option>
        );
    })

    return (
        <div>
            <Navigation />
            <div style={{ textAlign: 'center', margin: '100px' }}>
                <Space >
                    <select onChange={getCities} style={{ width: '100px', textAlign: 'center', margin: '20px' }}>
                        <option >-请选择-</option>
                        {provinceOption}
                    </select>
                    <select style={{ width: '100px', textAlign: 'center', margin: '20px' }}>
                        <option >-请选择-</option>
                        {cityOption}
                    </select>
                </Space>
            </div>
        </div>
    );
};