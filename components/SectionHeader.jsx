import Link from 'next/link';
import React, { useState } from 'react'

function SectionHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    // 메뉴 상태를 토글하는 함수
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // 메뉴가 열려있는지에 따라 이미지 URL을 결정
    const menuIcon = menuOpen ? "/images/close.png" : "/images/hamburger.png";



    return (
        <div className='App'>
            <section className='section-0'>
               <div className='header_m'>
                    <div className='header_ctn'>
                        <div className='logo_m'>
                        <Link href="/"><img src="./images/logo.png" alt="" /></Link>
                        </div> 
                        <div className='status_m' onClick={toggleMenu}>
                            <img src={menuIcon} alt="menu" />
                        </div>
                    </div>
                    <div className='menu-container'>
                        {menuOpen && (
                            
                            <ul className='menu'>
                                <li className='text-m'><Link href="/introduce">링크업 소개</Link> </li>
                                <li className='text-m'>
                                    <Link href="/request">디자인 의뢰하기</Link>
                                </li>
                                <li className='text-m'>
                                    <Link href="/portfolio">포트폴리오</Link>
                                </li >
                                <li className='text-m'><Link href="/community">커뮤니티</Link>
                                </li>
                                <li className='text-m'><Link href="/question">자주하는 질문</Link>
                                </li>
                                <li className='text-m'><Link href="/notice">공지사항</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
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
                            <Link href="/login" style={{ margin: "10px" }}>로그인</Link>
                            <Link href="/">회원가입</Link>
                        </div>
                        <p className='text-2'>고객센터  052-123-4567</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SectionHeader;