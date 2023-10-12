import Link from 'next/link';
import React, { useState } from 'react'

function SectionHeader() {

    return (
        <div className='App'>
            <section className='section-0'>
                <div className="nav">
                    <ul className='content'>
                        <li>
                            <div className='logo'>
                                <Link href="/"><img src="./images/logo.png" alt="" /></Link>
                            </div>
                        </li>
                        <div className='left-ctn'>
                            <div class="search-container">
                                <input type="text" placeholder="검색어를 입력하세요"></input>
                                <button>검색</button>
                            </div>

                            <ul className='menu'>
                                <li className='text-2'><Link href="/introduce">링크업 소개</Link> </li>
                                <li className='text-2'>
                                    <Link href="/player">디자인 의뢰하기</Link>
                                </li>
                                <li className='text-2'>
                                    <Link href="/employer">포트폴리오</Link>
                                </li >
                                <li className='text-2'><Link href="/recruit">커뮤니티</Link>
                                </li>
                                <li className='text-2'><Link href="/recruit">자주하는 질문</Link>
                                </li>
                                <li className='text-2'><Link href="/recruit">공지사항</Link>
                                </li>
                            </ul>
                        </div>
                    </ul>
                    <div className='right-ctn'>
                        <p>로그인 ㅣ 회원가입</p>
                        <p>고객센터 ㅣ 052-123-4567</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionHeader;