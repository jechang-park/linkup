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
const question = () => {
    return (
        <div className="App">
            <Head>
            </Head>
            <SectionHeader></SectionHeader>
            <section className='section-1_question'>
                <div className='banner'>
                    <p className='text-1'>자주하는 질문</p>
                </div>
            </section>
            <section className='section-2_community'>
                <p className='text-2 isBold'>궁금한 사항은 문의하기로 남겨주세요</p>
                <div className='ctn'>
                    <div class="search-container">
                        <button><img src="/images/search.png" alt="" /></button>
                        <input type="text" placeholder="검색어를 입력하세요"></input>
                    </div>
                    <div className='btn isBold'>문의하기</div>
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
                            <td>명함 1장에 양면으로 출력이 되나요?</td>
                            <td>디자이너</td>
                            <td>2023-10-11</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>명함으로 제작 가능한 최대 사이즈는 어떻게 되나요?</td>
                            <td>디자이너</td>
                            <td>2023-10-11</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>명함 테두리에 흰색 여백이 있어요</td>
                            <td>디자이너</td>
                            <td>2023-10-11</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>파일 주문이 가능한가요?</td>
                            <td>디자이너</td>
                            <td>2023-10-11</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>로고를 넣어 제작할 수 있나요?</td>
                            <td>디자이너</td>
                            <td>2023-10-11</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>디자인 시안을 원하는대로 제작 가능한가요?</td>
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

export default question;