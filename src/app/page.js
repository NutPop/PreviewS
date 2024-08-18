"use client";
import Image from "next/image";
import styles from './page.module.css';
import Link from 'next/link';
import KimImage from './Kim.jpg';
import JungImage from './Jung.jpg';
import KimdojaImage from './Kimdoja.jpg';
import LogorinaImage from './Logorina.jpg';
import VioletImage from './Violet.jpg';
import HunshuImage from './Hunshu.png';
import YuImage from './Yu.png';
import KimIImage from './KimI.png';
import './globals.css';
import Script from 'next/script';

export default function Home() {
  return (
<>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
    <Link className="navbar-brand" href="/">
      <Image
        src={LogorinaImage}
        alt="Logo"
        width={50} // ปรับขนาดตามต้องการ
        height={50}
      />
    </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>
        <li class="nav-item">
        <a href="/sigup" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">Signup</a>
        </li>
        <li class="nav-item">
        <a href="/sigin" class="btn btn-outline-dark" tabindex="-1" role="button" aria-disabled="true">Sigin</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>

  <div className="container">

  <style jsx>{`
    .container {
      font-family: 'Prompt', sans-serif;
      line-height: 1.6;
      color: #333; /* สีตัวอักษร */
    }

    .carousel {
      margin-bottom: 30px;
    }

    .carousel-item img {
      border-radius: 5px; /* ปรับมุมภาพ */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* เพิ่มเงา */
    }

    .card {
      border: none;
      transition: all 0.3s ease; /* ปรับ transition ให้ครอบคลุมทุกอย่าง */
      background-color: #f8f9fa; /* เปลี่ยนพื้นหลัง card เป็นสีเทาอ่อน */
      border-radius: 8px; /* ปรับมุม card ให้มนขึ้น */
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card-img-top {
      border-radius: 8px 8px 0 0; 
    }

    .card-body {
      padding: 20px; /* เพิ่มระยะห่างภายใน card body */
    }

    .card-title {
      font-weight: bold;
      margin-bottom: 10px;
      color: #212529; /* เปลี่ยนสีหัวข้อเป็นสีเทาเข้ม */
    }

    .card-text {
      color: #495057; /* ปรับสีเนื้อหาให้เข้มขึ้นเล็กน้อย */
    }
  `}</style>

    <div className="row my-3">
      <div className="col-md-12 text-center bg-light p-5 border rounded">
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={KimImage} className="d-block w-100" alt="Kim" />
    </div>
    <div className="carousel-item">
      <Image src={JungImage} className="d-block w-100" alt="Jung" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </div>

    <div className="row mb-3 justify-content-center"> <div className="col-md-4">
        <div className="card shadow-sm" style={{ width: '18rem' }}>
            <Image src={KimIImage} className="card-img-top" alt="KimI" width={286} height={180} />
            <div className="card-body">
                <h5 className="card-title">Kim</h5> 
                <p className="card-text">
                  เขาเป็นพนักงานออฟฟิศทั่วไปที่มีความหลงใหลในการอ่าน นวนิยายบนเว็บเรื่องโปรดของเขาคือ "Three Ways to Survive in a Ruined World" อย่างไรก็ตาม ชีวิตของเขาต้องพลิกผันครั้งใหญ่เมื่อเหตุการณ์ในนวนิยายเริ่มต้นขึ้นในชีวิตจริง
                </p>
            </div>
        </div>
    </div>

    <div className="col-md-4">
        <div className="card shadow-sm" style={{ width: '18rem' }}>
            <Image src={HunshuImage} className="card-img-top" alt="Hunshu" width={286} height={180} />
            <div className="card-body">
                <h5 className="card-title">Hunshu</h5>
                <p className="card-text">
                เป็นผู้เขียนเว็บนวนิยายเรื่อง "SSSSSS-Grade Infinite Regressor" ซึ่ง คิมทกจา กล่าวหาว่าลอกเลียนแบบ "Three Ways to Survive in a Ruined World" รองจากคิมทกจา เธอคือบุคคลที่มีความรู้มากที่สุดเกี่ยวกับสามวิธีในการเอาชีวิตรอดในโลกที่ถูกทำลาย แม้ว่าเธอจะเริ่มจากการเป็นปรปักษ์กับคิมทกจาและพันธมิตรของเขา แต่ต่อมาเธอก็กลายเป็นส่วนสำคัญของคิมทกจา
                </p>
            </div>
        </div>
    </div>

    <div className="col-md-4">
        <div className="card shadow-sm" style={{ width: '18rem' }}>
            <Image src={YuImage} className="card-img-top" alt="Yu" width={286} height={180} />
            <div className="card-body">
                <h5 className="card-title">Yu</h5>
                <p className="card-text">
                  เป็นตัวเอกหลักและเป็นหนึ่งในตัวละครที่ทรงพลังที่สุดของนวนิยายบนเว็บต้นฉบับ "Three Ways to Survive in a Ruined World" แม้ว่าในตอนแรกเขาจะไม่ไว้วางใจ คิมทกจา และพวกของเขาก็พยายามทำความเข้าใจซึ่งกันและกัน
                </p>
            </div>
        </div>
        
    </div>
    
</div>
     
  </div>
</>
  );
}
