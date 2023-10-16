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
            <section className='section-1_community'>
                <div className='banner'>
                    <p className='text-1'>커뮤니티</p>
                </div>
            </section>
            <section className='section-2_community'>
                <p className='text-2 isBold'>자유롭게 이야기를 나눠보세요!</p>
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
            <td>디자인 포트폴리오</td>
            <td>디자이너</td>
            <td>2023-10-11</td>
            <td>1100</td>
        </tr>
        <tr>
            <td>1</td>
            <td>이런 디자인 어떤가요?</td>
            <td>디자이너</td>
            <td>2023-10-11</td>
            <td>1200</td>
        </tr>
        <tr>
            <td>1</td>
            <td>디자인 관련 조언 부탁드립니다.</td>
            <td>디자이너</td> 
            <td>2023-10-11</td>
            <td>5100</td>
        </tr>
        <tr>
            <td>1</td>
            <td>궁금한 점이 있습니다.</td>
            <td>디자이너</td> 
            <td>2023-10-11</td>
            <td>10</td>
        </tr>
        <tr>
            <td>1</td>
            <td>현직 디자이너의 조언을 듣고 싶습니다.</td>
            <td>디자이너</td> 
            <td>2023-10-11</td>
            <td>100</td>
        </tr>
        <tr>
            <td>1</td>
            <td>디자인 선배님들께 조언 구합니다...</td>
            <td>디자이너</td> 
            <td>2023-10-11</td>
            <td>140</td>
        </tr>
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