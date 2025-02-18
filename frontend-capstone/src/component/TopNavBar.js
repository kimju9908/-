import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Background = styled.div`
  width: 100%;
  height: 100px;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 그림자 추가로 구분 */
  
  /* p 태그 스타일링 */
  p {
    cursor: pointer;
    font-weight: bold;
  }
`;

const Left = styled.div`
  max-width: 700px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* img 태그 스타일링 (LOGO) */
  img {
    width: 250px;
    height: 50px;
    cursor: pointer;
    margin-left: 10px;
  }

  /* p 태그 스타일링 (NavBar page 항목)*/
  p {
    display: flex;
    justify-content: center;
    margin: 0 10px;
  }
`;



const Right = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* img 태그 스타일링 */
  img {
    width: 90px;
    height: 50px; /* 최소 너비 설정 */
    cursor: pointer;
    margin-right: 20px;
  }
`;

// 입시자료 모달 스타일
const MaterialModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1000;
`;

const MatrialModalContent = styled.div`
  position: fixed; /* 고정 위치 */
  top: 80px; /* 화면 높이에 비례하여 위치 */
  left: 200px; /* 화면 너비에 비례하여 위치 */
  width: 200px;
  height: 100px;
  background: white;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid silver;
  text-align: center;
  z-index: 1000;
  
  /* p 태그 스타일링 */
  p {
    margin-bottom: 10px;  /* 항목 사이에 간격 추가 */
  }
`;

// 로그인 모달 스타일
const LoginModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1;
`;

const LoginModalContent = styled.div`
  position: fixed; /* 고정 위치 */
  top: 80px; /* 화면 높이에 비례하여 위치 */
  right: 20px; /* 화면 너비에 비례하여 위치 */
  width: 150px;
  height: 100px;
  background: white;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid silver;
  text-align: center;
  
  /* p 태그 스타일링 */
  p {
    margin-bottom: 10px; /* 항목 사이에 간격 추가 */
  }
`;

const TopNavBar = () => {
  const [isMaterialModalOpen, setIsMaterialModalOpen] = useState(false); // 입시자료 모달 상태 관리
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // 로그인 모달 상태 관리
  const navigate = useNavigate(); // 페이지 전환 훅

  const materialOpenModal = () => setIsMaterialModalOpen(true); // 입시자료 모달창 ON
  const materialCloseModal = () => setIsMaterialModalOpen(false); // 입시자료 모달창 OFF

  const loginOpenModal = () => setIsLoginModalOpen(true); // 로그인 모달창 ON
  const loginCloseModal = () => setIsLoginModalOpen(false); // 로그인인 모달창 OFF

  // 입시자료 클릭 시 모달 닫고 페이지 전환
  const handleMaterialNavigate = (path) => {
    setIsMaterialModalOpen(false); // 모달 닫기
    navigate(path); // 페이지 전환
  };

  // 로그인 모달 클릭 시 페이지 전환
  const handleLoginNavigate = (path) => {
    setIsLoginModalOpen(false); // 모달 닫기
    navigate(path); // 페이지 전환
  };

  return (
    <>
      <Background>
        <Left>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ipsi-f2028.firebasestorage.app/o/firebase%2Flogo%2Flogo.png?alt=media"
            alt="Logo"
          />
          <p onClick={materialOpenModal}>입시자료</p>
          <p onClick={() => navigate("/")}>자소서 작성</p>
          <p onClick={() => navigate("/")}>게시판</p>
          <p onClick={() => navigate("/")}>FAQ</p>
          <p onClick={() => navigate("/")}>이용후기</p>
        </Left>
        <Right>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/ipsi-f2028.firebasestorage.app/o/firebase%2Fprofile%2FProfile_Purple.png?alt=media"
            alt="Profile"
            onClick={loginOpenModal}
          />
        </Right>

        {/* 모달창 */}
        {/* 입시자료 모달창 */}
        {isMaterialModalOpen && (
          <MaterialModalBackground onClick={materialCloseModal}>
            <MatrialModalContent onClick={(e) => e.stopPropagation()}>
              <p onClick={() => handleMaterialNavigate("/coverLetter")}>
                자기소개서
              </p>
              <p onClick={() => handleMaterialNavigate("/")}>생활기록부</p>
            </MatrialModalContent>
          </MaterialModalBackground>
        )}

        {/* 로그인 모달창 */}
        {isLoginModalOpen && (
          <LoginModalBackground onClick={loginCloseModal}>
            <LoginModalContent onClick={(e) => e.stopPropagation()}>
              <p onClick={() => handleLoginNavigate("/")}>회원가입</p>
              <p onClick={() => handleLoginNavigate("/")}>로그인</p>
            </LoginModalContent>
          </LoginModalBackground>
        )}
      </Background>
    </>
  );
};

export default TopNavBar;
