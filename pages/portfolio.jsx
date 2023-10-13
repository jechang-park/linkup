// pages/menu.js
import Link from 'next/link';
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Head from 'next/head';
import SectionFooter from '../components/SectionFooter';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css';
import 'semantic-ui-css/semantic.min.css'
import { Table } from 'semantic-ui-react';

const portfolio = () => {
    return (
        <div className="App">
            <SectionHeader></SectionHeader>
            <section className='section-1_portfolio'>
                <div className='banner'>
                    <p className='text-1'>포트폴리오</p>
                </div>
            </section>
            <section className='section-2_portfolio'>
                <div className='ctn'>
                    <p className='text-2 isBold'>디자이너 포트폴리오</p>
                    <img src="/images/7.jpeg" alt="" />
                    <img src="/images/9.jpeg" alt="" />
                    <img src="/images/1.jpeg" alt="" />
                </div>
                <div className='ctn'>
                    <img src="/images/8.jpeg" alt="" />
                    <img src="/images/4.jpeg" alt="" />
                    <img src="/images/5.jpeg" alt="" />
                </div>
                <div className="pagination">
                    <button className="page-btn">1</button>
                    <button className="page-btn">2</button>
                    <button className="page-btn">3</button>
                    {/* 추가적인 페이지 버튼들 */}
                </div>
            </section>
            <SectionFooter></SectionFooter>
        </div>
    );
};

export default portfolio;
