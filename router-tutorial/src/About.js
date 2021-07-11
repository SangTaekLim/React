import React from 'react';
import qs from 'qs';

const About = ({ location }) => {

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 문자열 맨앞 ? 생략
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제</p>
      {showDetail && <p>detail 값을 true 로 설정하셧네요</p>}
    </div>
  );
}


export default About;