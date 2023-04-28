import React, { useState } from "react";
import Notice from "./Notice";
import Model from "../components/Modal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavBtn = styled.div`
  color: white;
  fontsize: 30px;
  padding: 20px;
  position: relative;
  margintop: 70px;
  text-align: center;
`;

export default function Home() {
  const [showNotice, setShowNotice] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <NavList>
          <NavBtn onClick={() => navigate("/mypage/edit")}>프로필 수정</NavBtn>
          <li>
            <NavBtn>
              <span onClick={() => setShowNotice(true)}>알림</span>
            </NavBtn>
          </li>
        </NavList>
      </nav>
      {showNotice && (
        <Model
          Children={<Notice setShowNotice={setShowNotice} />}
          setShowNotice={setShowNotice}
        />
      )}
    </>
  );
}