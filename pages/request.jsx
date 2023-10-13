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

const request = () => {
    return (
        <div className="App">
            <Head>
            </Head>
            <SectionHeader></SectionHeader>
            <section className='section-1_request'>
                <div className='banner'>
                    <p className='text-1 isBold'>디자인 의뢰하기</p>
                </div>
            </section>
            <section className='section-2_request'>
                <p className='text-1 isBold'>디자인 의뢰 전 반드시 확인해주세요.</p>
            </section>
            <section className='section-3_request'>
                <p className='text-1'>디자인 수정하기</p>
                <div className='ctn_1'>
                    <p className='text-2'>1. 수정 가능한 al, eps, png, jpg, pdf, psd 파일을 제공해 주셔야 합니다. (이미지 포함)</p>
                    <p className='text-2'>• 텍스트 수정 시 : 아웃라인화 하지 않은 수정 가능한 파일</p>
                    <p className='text-2'> • 배열/컬러 변경 시 : 벡터 파일( ai. eps ) 이거나 레이어로 나뉘어져 수정이 가능한 파일</p>
                    <p className='text-2'>2. 간단한 디자인 수정 : 완성된 데이터의 텍스트 및 배열, 컬러 변경 정도의 작업 난이도 입니다.</p>
                    <p className='text-2'>3. 복잡한 디자인 수정 : 완성된 데이터의 전면 수정 및 이미지 합성, 이미지 제작 정도의 작업 난이도 입니다.</p>
                </div>

                <div className='ctn_2'>
                    <p className='text-2'>신규디자인 의뢰 시 고객이 기본 자료를 제공해 주셔야 합니다.</p>
                    <p className='text-2'>• 로고, 사진 이미지 : 확장자 ail, eps, png, jpg, pdf, psd 파일 / 로고, 이미지 제작 시 추가 비용 발생</p>
                    <p className='text-2'>• 텍스트 문구 : 앞면과 뒷면을 구분한 텍스트파일 ms 오피스, HWP(한글) 등 / 수기로 쓴 파일 불가</p>
                    <p className='text-2'>• 디자인 컨셉 : 별도 연락 상담</p>
                </div>
                <div className='ctn_3'>
                    <p className='text-2'>디자인 시안 : 시안은 한 가지만 가능하며 여러 시안이 제공되지 않습니다.</p>
                    <p className='text-2'>디자인 수정 : 시안확인 후 수정은 3회까지 가능하며 3회 이상일 경우 추가 비용이 발생됩니다.</p>
                    <p className='text-2'>디자인 교정 : 교정은 웹하드 교정하기 폴더에서 확인 가능하며 교정 확인 후 진행이 시작되면 수정이 불가합니다.</p>
                    <p className='text-2'>의뢰시 자료 : 디자인 의뢰시 제작될 내용문구와 사진 등을 첨부해 주셔야 하며 저작권 문제에 민감한 사진이나 내용은 책임지지않습니다.</p>
                    <p className='text-2'>디자인 보관 : 시안작업 완료 후 자료는 2년간 보관되며 재주문시 접수번호를 알려주시면 추가제작 혹은 수정제작이 가능합니다.</p>
                    <p className='text-2'>디자인 소유 : 작업된 디자인 시안의 소유권은 당사에 귀속되어 외부로 유출이 불가합니다.</p>
                    <p className='text-2'>취소 및 환불 : 디자인 시안 작업 중에는 취소와 환불처리가 어려우며 부득이한 경우 디자인 의뢰비를 제외한 인쇄제작비용만 취소 가능합니다.</p>
                    <p className='text-2 isBold'>유의사항 : 모든 디자인 의뢰는 선입금으로 진행하며 고객의 변심에 의한 환불은 어렵습니다.</p>
                </div>
            </section>
            <SectionFooter></SectionFooter>
        </div>
    );
};

export default request;
