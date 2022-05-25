
import styles from "@/styles/Freeboard.module.css"
import React, {useState} from 'react'
import axios from "axios";
export function Board () {
  return (
    <>
<form>
  <div class="form-group" style={{width:800+"px"}}>
    <label for="exampleFormControlInput1">작성자 ID</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div><br/>
  <div class="form-group">
    <label for="exampleFormControlSelect1">카테고리</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>표절 검사</option>
      <option>악보 분석</option>
      <option>음원 검색</option>
      <option>작곡 프로그램</option>
      <option>기타</option>
    </select>
  </div><br/>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">게시글 내용</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div><br/>
  <div style={{display: "flex", float: "right"}}>
    <button type="submit" class="btn btn-outline-dark">글 등록</button>
  </div>
</form></>)
  
}
