import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about__container">
            <span>
                저의 첫 개발로 영화 평점 웹서비스를 만들었습니다. 무료 api를 사용해 최근 20개의 영화가 평점순으로 정렬되어 있습니다.
                제공하는 정보는 제목, 연도, 장르, 줄거리 요약입니다. 영화 카드를 클릭하면 나타나는 상세페이지에는 제목이 표시됩니다.
            </span>
            <span>- 박초은, 2023. 02. 05</span>
        </div>
    );
}

export default About;
