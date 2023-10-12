// pages/menu.js
import Link from 'next/link';
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Head from 'next/head';
import SectionFooter from '../components/SectionFooter';

const Home = () => {
    return (
        <div className="App">
            <Head>
            </Head>
            <SectionHeader></SectionHeader>
            <section className='section-1'>
                <div className='banner'>
                    <p className='text-1'>명함 디자인이 필요할 땐<br /> 링크업!</p>
                </div>
            </section>
            <section className='section-2'>
                <div>
                    <p>Best: 많이 찾는 디자인</p>
                    <img src="/images/1.jpeg" alt="" />
                    <img src="/images/2.jpeg" alt="" />
                    <img src="/images/3.jpeg" alt="" />
                </div>
                <div>
                    <p>디자이너 포트폴리오</p>
                    <img src="/images/4.jpeg" alt="" />
                    <img src="/images/5.jpeg" alt="" />
                    <img src="/images/6.jpeg" alt="" />
                </div>
            </section>
            <section className='section-3'>
                <p className='text-2 isBold'>디자인 의뢰하기</p>
                <p className='text-2'>디자인 시안 : 시안은 한 가지만 가능하며 여러 시안이 제공되지 않습니다.</p>
                <p className='text-2'>디자인 수정 : 시안확인 후 수정은 3회까지 가능하며 3회 이상일 경우 추가 비용이 발생됩니다.</p>
                <p className='text-2'>디자인 교정 : 교정은 웹하드 교정하기 폴더에서 확인 가능하며 교정 확인 후 진행이 시작되면 수정이 불가합니다.</p>
                <p className='text-2'>의뢰시 자료 : 디자인 의뢰시 제작될 내용문구와 사진 등을 첨부해 주셔야 하며 저작권 문제에 민감한 사진이나 내용은 책임지지않습니다.</p>
                <p className='text-2'>디자인 보관 : 시안작업 완료 후 자료는 2년간 보관되며 재주문시 접수번호를 알려주시면 추가제작 혹은 수정제작이 가능합니다.</p>
                <p className='text-2'>디자인 소유 : 작업된 디자인 시안의 소유권은 당사에 귀속되어 외부로 유출이 불가합니다.</p>
                <p className='text-2'>취소 및 환불 : 디자인 시안 작업 중에는 취소와 환불처리가 어려우며 부득이한 경우 디자인 의뢰비를 제외한 인쇄제작비용만 취소 가능합니다.</p>
                <p className='text-2 isBold'>유의사항 : 모든 디자인 의뢰는 선입금으로 진행하며 고객의 변심에 의한 환불은 어렵습니다.</p>
            </section>
            <section className='section-4'>
            </section>
            <section className='section-5'>
            </section>

            <section ></section>
            <section ></section>
            <SectionFooter></SectionFooter>
        </div>
    );
};

export default Home;