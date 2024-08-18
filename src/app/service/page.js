"use client";
import Image from "next/image";
import Link from 'next/link';
import LogorinaImage from './Logorina.jpg';
export default function Home() {
  return (
<>
  <header>
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
  </header>
  <main>
  <style jsx>{`
    main {
      padding: 20px;
      font-family: 'Prompt', sans-serif;
      line-height: 1.8;
      max-width: 800px;
      margin: 0 auto;
      color: #f0f0f0; /* สีตัวอักษรเป็นสีขาว */
      background-color: #212529; /* เปลี่ยนพื้นหลังเป็นสีเทาเข้ม */
    }

    .service-hero {
      background-image: url('/path/to/your/hero-image.jpg'); /* เพิ่มภาพพื้นหลัง */
      background-size: cover;
      background-position: center;
      padding: 100px 0; /* ปรับระยะห่างภายในตามต้องการ */
      text-align: center;
      border-radius: 10px; /* ปรับมุม */
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* เพิ่มเงา */
    }

    .service-hero h2, .service-hero h3 {
      color: #fff; /* สีขาวสำหรับข้อความในส่วน hero */
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* เพิ่มเงาให้ตัวหนังสือ */
    }

    .service-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .service-item {
      background-color: #343a40; /* สีพื้นหลังสำหรับแต่ละบริการ */
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      flex-basis: 30%; /* ปรับขนาดตามต้องการ */
      margin-bottom: 20px;
      text-align: center; /* จัดข้อความให้อยู่กึ่งกลาง */
      color: #f0f0f0; /* สีตัวอักษรเป็นสีขาว */
    }

    .service-item h3 {
      color: #ffc107; /* สีทองสำหรับหัวข้อบริการ */
      margin-bottom: 15px;
    }
  `}</style>

  <section className="service-hero">
    {/* ส่วนภาพพื้นหลังหรือภาพปก */}
    <h2>บริการของเรา</h2>
    <h3>เตรียมพร้อมรับมือวันสิ้นโลก</h3>
  </section>

  <section className="service-list">
    <div className="service-item">
      <h3>Scenario Guidance</h3>
      <p>
        วางแผนการเอาชีวิตรอดของคุณด้วยคำแนะนำจากผู้รอบรู้สถานการณ์ (Scenario). เราจะช่วยคุณวิเคราะห์สถานการณ์ที่อาจเกิดขึ้นและเตรียมแผนรับมือที่เหมาะสม
      </p>
    </div>

    <div className="service-item">
      <h3>Survival Training</h3>
      <p>
        ฝึกฝนทักษะการเอาชีวิตรอดที่จำเป็น ไม่ว่าจะเป็นการต่อสู้, การหาอาหาร, การปฐมพยาบาล, หรือการสร้างที่พักอาศัย เรามีหลักสูตรที่ครอบคลุมทุกด้าน
      </p>
    </div>

    <div className="service-item">
      <h3>Community Support</h3>
      <p>
        เข้าร่วมชุมชนผู้รอดชีวิตเพื่อแลกเปลี่ยนข้อมูล, สร้างพันธมิตร, และร่วมมือกันเผชิญหน้ากับสถานการณ์ต่างๆ เราเชื่อว่าการรวมกลุ่มกันคือกุญแจสำคัญในการเอาชีวิตรอด
      </p>
    </div>
  </section>
</main>

  </>
  );
}
