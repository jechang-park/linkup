// pages/menu.js
import Link from 'next/link';
import SectionHeader from '../components/SectionHeader';
import Head from 'next/head';
import SectionFooter from '../components/SectionFooter';
import React, { useState } from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css"; // 토글 스타일링을 위한 CSS. 이 부분은 토글 버튼을 스타일링하기 위해 필요합니다.
const login = () => {
    const [toggleStatus, setToggleStatus] = useState(false);

    const handleToggle = () => {
        setToggleStatus((currentStatus) => !currentStatus);
    };

    return (
        <div className="App">
            <Head>
            </Head>
            <SectionHeader></SectionHeader>
            <section className='section-1_login'>

                <div className='ctn'>
                    <img src="/images/logo.png" alt="로고" />
                </div>
                <div className='login_box'>
                    <div className='ctn_1'>
                        <label>
                            <input type="checkbox" />
                            <span>로그인 상태 유지</span>
                        </label>
                        <span>보안</span>
                        <Toggle
                            checked={toggleStatus}
                            onChange={handleToggle}
                        // 여기에 필요한 어떤 다른 속성도 추가할 수 있습니다.
                        />
                        {toggleStatus}
                    </div>
                    <div className='ctn_2'>
                        <input type="text" placeholder='아이디' />
                        <input type="text" placeholder='비밀번호' />
                    </div>
                    <div className='btn'>
                        <button >로그인</button>
                    </div>
                    <div className='ctn_3'>
                        <span>회원가입</span><span>아이디/비밀번호 찾기</span>
                    </div>
                </div>
            </section>
            <SectionFooter></SectionFooter>
        </div>
    );
};

export default login;