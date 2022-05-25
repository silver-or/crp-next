import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import {Header} from '@/components';
import theme from '@/public/myTheme.js';

import 'bootstrap/dist/css/bootstrap.css'

export function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img src="https://ifh.cc/g/KtohFH.png" style={{width:90+"px"}}/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              회사 소개
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/company/profile">개발자들</a></li>
              <li><a class="dropdown-item" href="/company/oursite">사이트 소개</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              커뮤니티
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/community/faq">FAQ</a></li>
              <li><a class="dropdown-item" href="/community/list">자유게시판</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/site/aboutSite">관련 사이트</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              전체 기능
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/plagiarism/upload">악보 표절 검사 프로그램</a></li>
              <li><a class="dropdown-item" href="/music/musicPlay">음원 검색</a></li>
              <li><a class="dropdown-item" href="/compose/compose">작곡 프로그램</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <a href="/user/login"><button type="button" class="btn btn-dark">로그인</button></a> &nbsp; 
          <a href="/user/register"><button type="button" class="btn btn-outline-dark">회원가입</button></a>
        </form>
      </div>
    </div>
  </nav>
  );
}