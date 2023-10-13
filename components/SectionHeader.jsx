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
                                <input type="text" placeholder="어떤 디자인이 필요하세요?"></input>
                                <button><img src="/images/search.png" alt="" /></button>
                            </div>

                            <ul className='menu'>
                                <li className='text-2'><Link href="/introduce">링크업 소개</Link> </li>
                                <li className='text-2'>
                                    <Link href="/request">디자인 의뢰하기</Link>
                                </li>
                                <li className='text-2'>
                                    <Link href="/portfolio">포트폴리오</Link>
                                </li >
                                <li className='text-2'><Link href="/community">커뮤니티</Link>
                                </li>
                                <li className='text-2'><Link href="/question">자주하는 질문</Link>
                                </li>
                                <li className='text-2'><Link href="/notice">공지사항</Link>
                                </li>
                            </ul>
                        </div>
                    </ul>
                    <div className='right-ctn'>
                        <div>
                            <Link href="/community">로그인</Link>
                            <Link href="/community">회원가입</Link>
                        </div>
                        <p>고객센터  052-123-4567</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionHeader;