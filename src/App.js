import './App.css';
import './Color.css';
import React from 'react';
import Sun_img from './image/sun.png';
import Moon_ing from './image/moon.png';
import FingerPrint_img from './image/FG.png';
import Logo_img from './image/LOGO-TRUNG-TAM-NEW.png';
import TopBanner from './image/top_banner.png'
import { getServerLink } from './Link';

function App() {

  // const {type,setType}= useState("");

  const handleClick = (value) => {
    let url = getServerLink() + value;
    // console.log(url);
    window.open(url)
  }

  const DarkMode = (e) => {
    if (e.target.checked) {
      document.getElementById("ic_mode").src = Moon_ing;
      document.body.style.background = 'rgb(' + [56, 43, 56].join(',') + ')';
    } else {
      document.getElementById("ic_mode").src = Sun_img;
      document.body.style.background = 'white';
    }
  }

  return (
    <div>
      <img src={TopBanner} className="top_banner_responsive" alt='#' />
      <label>
        <div className='Switch'>
          <input type={"checkbox"} onChange={e => DarkMode(e)} />
          <span>
            <img src={Sun_img} id='ic_mode' alt="#" />
          </span>
        </div>
      </label>
      <div className='container left'>
        <a href='https://mentoring.edu.vn/?fbclid=IwAR3BENiyRYrI-BTRutMfAOYdXLdWiJZCzExgXOmgFwJkmV2x5jds1rhJRWI' alt="#" target="_blank" rel="noreferrer">
          <figure className='wrapper_img'>
            <img src={Logo_img} className="img_left" alt="#" />
          </figure>
        </a>
      </div>
      <div className='container right'>
        <div className='serviceBox box1' onClick={e => handleClick("UL")}>
          <div className='icon ic1'>
            <img src={FingerPrint_img} className="img" alt="#" />
            <p className='inner_text'>UL</p>
          </div>
          <div className='content'>
            <h2>Linh Động</h2>
            <p>Ôn hòa, thân thiện, cởi mở, lãng mạn</p>
          </div>
        </div>
        <div className='serviceBox box2' onClick={e => handleClick("RL")}>
          <div className='icon ic2'>
            <img src={FingerPrint_img} className="img" alt="#" />
            <p className='inner_text'>RL</p>
          </div>
          <div className='content'>
            <h2>Thích Suy Luận</h2>
            <p>Linh động, mạnh mẽ</p>
          </div>
        </div>
        <div className='serviceBox box3' onClick={e => handleClick("WCWDWI")}>
          <div className='icon ic3'>
            <img src={FingerPrint_img} className="img" alt="#" />
            <p className='inner_text'>WC – WD - WI</p>
          </div>
          <div className='content'>
            <h2>Hướng Ngoại</h2>
            <p>Đa mục tiêu, nhìn nhận vấn đề đa chiều</p>
          </div>
        </div>
        <div className='serviceBox box4' onClick={e => handleClick("WPWL")}>
          <div className='icon ic4'>
            <img src={FingerPrint_img} className="img" alt="#" />
            <p className='inner_text'>WP - WL</p>
          </div>
          <div className='content'>
            <h2>Sáng Tạo</h2>
            <p>Chủ nghĩa hoàn hảo</p>
          </div>
        </div>
        <div className='serviceBox box5' onClick={e => handleClick("WTWS")}>
          <div className='icon ic5'>
            <img src={FingerPrint_img} className="img" alt="#" />
            <p className='inner_text'>WT - WS</p>
          </div>
          <div className='content'>
            <h2>Lãnh Đạo Tốt</h2>
            <p>Lập mục tiêu rõ ràng để hành động</p>
          </div>
        </div>
        <div className='serviceBox box6' onClick={e => handleClick("WE")}>
          <div className='icon ic6'>
            <img src={FingerPrint_img} className="img" alt="#" />
            <p className='inner_text'>WE</p>
          </div>
          <div className='content'>
            <h2>Sâu Sắc</h2>
            <p>Có tầm nhìn xa</p>
          </div>
        </div>
        <div className='serviceBox box7' onClick={e => handleClick("ARCH")}>
          <div className='icon ic7'>
            <img src={FingerPrint_img} className="img" alt="#" />
            <p className='inner_text'>ARCH</p>
          </div>
          <div className='content'>
            <h2>Ham học hỏi</h2>
            <p>Cẩn thận, làm việc có trình tự</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
