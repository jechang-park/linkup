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
                </ul>
            </div>
        </section>
        </div>
    );
}

export default SectionHeader;