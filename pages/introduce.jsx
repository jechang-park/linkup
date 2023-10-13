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

const introduce = () => {
    return (
        <div className="App">
            <Head>
            </Head>
            <SectionHeader></SectionHeader>
            <section className='section-1_introduce'>
                <div className='banner'>
                    <p className='text-1'>링크업 소개</p>
                </div>
            </section>
            <section className='section-2_introduce'>
                <p className='text-2 isBold'>특별하고 다양한<br />명함 디자인을 원하세요?</p>
                <div className='textbox textbox_1'>
                    <div className='ctn_1'>
                        <p className='text-3 isBold'>개인고객</p>
                    </div>
                    <p className='text-3'>링크업은 평범한 명함 디자인을 넘어<br />
                        각 고객의 개인별, 직업적 특성에 맞춘 퍼스널 명함을 제작해드립니다.<br /><br />
                        더불어 단순히 디자인 의뢰뿐만 아닌, 내가 원하는 디자인 전문가를 링크업에서 찾을 수 있습니다.<br />
                        믿을 수 있는 비즈니스 파트너에게 간편하게 의뢰해보세요.</p>
                </div>
                <div className='textbox textbox_2'>
                    <div className='ctn_2'>
                        <p className='text-3 isBold'>디자인 전문가</p>
                    </div>
                    <p className='text-3'>전문 디자이너이신가요?<br/>
                        그렇다면 링크업에서 다른 디자이너들과 커뮤니티를 통해<br/>
                         소통하고 포트폴리오 등의 피드백을 주고 받을 수 있습니다.<br/>
                        또한 협업을 통해 프리랜서 혹은 혼자 일하는 디자이너들의<br/>
                        커리어 성장이 가능합니다.<br/>
                        링크업 커뮤니티를 통해 다양하고 자유로운 의견을 나눠보세요.</p>
                </div>
                <div className='textbox textbox_3'>
                    <div className='ctn_3'>
                        <p className='text-3 isBold'>링크업만의 특별한 장점</p>
                    </div>
                    <p className='text-3'>1. 링크업에는 다양한 디자인 전문가가 모여있습니다.<br/>
                        내가 원하는 특성에 맞춰 전문가가디자인을 제작해드립니다.<br/>
                        2. 커뮤니티를 통해 디자인 포트폴리오를 공유하고 의견을 나눌 수 있습니다.</p><br/><br/>
                    <p className='text-3'>링크업은 창의적이고 개성을 가진 디자이너를 기다리고 있습니다</p>
                </div>
            </section>
            <SectionFooter></SectionFooter>
        </div>
    );
};

export default introduce;
