import React from 'react'
import styles from '@/styles/Float.module.css'

export function Compose()  {
  return (<>
    <div>
    <img src="https://blog.kakaocdn.net/dn/kZB1w/btrlvCrTY2V/AYD3ZjXUkzO6Nkf5YOPk3k/img.jpg" alt="Alps" style={{width:800}}/>
    </div>
    <a href="#" className={styles.float}>
        <img src='https://ifh.cc/g/5y48Hl.png' className={styles.my} style={{width:40+"px", height:40+"px"}}/>
    </a></>
  )
}
