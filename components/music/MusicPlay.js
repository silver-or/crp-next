import React from "react";

export function MusicPlay(){
  return (
    <>
    <a href="/music/musicSearch" style={{textDecoration:"none", color: "black"}}>
        <img src="https://static.thenounproject.com/png/1310897-200.png" style={{width:100+"px"}}/>
    </a> <br/>
    <p>버튼을 누른 후 음악을 들려주세요.</p>
    <p>소음이 심한 경우 검색 결과 확인이 어려울 수 있습니다.</p>
    <div class="progress">
        <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:500+"px"}}></div>
    </div>
    </>
  )
}