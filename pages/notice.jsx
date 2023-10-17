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
const community = () => {
    return (
        <div className="App">
            <Head>
            </Head>
            <SectionHeader></SectionHeader>
            <section className='section-1_notice'>
                <div className='banner'>
                    <p className='text-1'>공지사항</p>
                </div>
            </section>
            <section className='section-2_community'>
                <p className='text-2 isBold'>공지사항을 확인해주세요</p>
                <div className='ctn'>
                    <div class="search-container">
                        <button><img src="/images/search.png" alt="" /></button>
                        <input type="text" placeholder="검색어를 입력하세요"></input>
                    </div>
                    <div className='btn isBold'>작성하기</div>
                </div>
            </section>
            <section className='section-3_community'>
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th className="header-cell">번호</th>
                            <th className="header-cell">제목</th>
                            <th className="header-cell">작성자</th>
                            <th className="header-cell">작성일</th>
                            <th className="header-cell">조회</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>링크업, 업계 1위인인 이유</td>
                            <td>디자이너</td>
                            <td>2023-10-11</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>명함/스티커/택/현수막 주문 전 꼭 확인해주세요.</td>
                            <td>디자이너</td>
                            <td>2023-10-11</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2023년 추석 연휴 안내</td>
                            <td>디자이너</td>
                            <td>2023-10-11</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2023년 여름 휴가 안내</td>
                            <td>디자이너</td>
                            <td>2023-10-11</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>서버 점검 및 클라우드 이전 안내</td>
                            <td>디자이너</td>
                            <td>2023-10-11</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>고객센터 운영시간 안내</td>
                            <td>디자이너</td>
                            <td>2023-10-11</td>
                            <td>100</td>
                        </tr>
                        {/* 다른 게시물 행들을 추가할 수 있습니다 */}
                    </tbody>
                </table>
                <div className="pagination">
        <button className="page-btn">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        {/* 추가적인 페이지 버튼들 */}
    </div>
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

export default community;