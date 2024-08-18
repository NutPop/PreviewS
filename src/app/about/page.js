"use client";
import Image from "next/image";
import Link from 'next/link';
import LogorinaImage from './Logorina.jpg';
import OmnyImage from './Omny.jpg';
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
      line-height: 1.8; /* เพิ่มระยะห่างระหว่างบรรทัดให้อ่านง่ายขึ้น */
      max-width: 800px; /* กำหนดความกว้างสูงสุดให้อ่านสบาย */
      margin: 0 auto; /* จัดกึ่งกลางเนื้อหา */
    }

    section {
      margin-bottom: 40px; /* เพิ่มระยะห่างระหว่าง section */
    }

    h2, h3 {
      color: #333;
      margin-bottom: 20px;
    }

    p {
      text-indent: 2em; /* ย่อหน้า */
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 10px;
    }

    .about-summary, .about-themes, .about-author {
      background-color: white;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      padding: 30px; /* เพิ่มระยะห่างภายใน */
      margin-bottom: 20px;
    }

    .highlight {
      background-color: #f0f0f0;
      padding: 5px 10px;
      border-radius: 3px;
    }

    /* เพิ่มสไตล์สำหรับรูปภาพ */
    .cover-image {
      width: 100%;
      max-height: 400px; /* ปรับขนาดตามต้องการ */
      object-fit: cover; /* ให้รูปภาพเต็มพื้นที่โดยคงสัดส่วน */
      border-radius: 5px;
      margin-bottom: 20px;
    }
  `}</style>
<section style={{ position: 'relative', marginBottom: '30px' }}> 
  <div style={{ 
    position: 'relative', 
    width: '100%', 
    height: '400px', /* กำหนดความสูงของ container */
    borderRadius: '5px', /* ปรับมุม container */
    overflow: 'hidden' /* ซ่อนส่วนที่เกินของรูปภาพ */
  }}>
    <Image 
      src={OmnyImage} 
      alt="Omniscient Reader ภาพปก"
      layout="fill" 
      objectFit="cover"
      priority
    />
  </div>
  <div style={{ 
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    fontSize: '2.5em',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }}>
  <h2 style={{ color: 'white' }}>Omniscient Reader</h2> 
  <h3 style={{ fontSize: '1.5em', color: 'white' }}>อ่านชะตาวันสิ้นโลก</h3> 
  </div>
</section>

  <section className="about-summary">
    <h3 style={{ color: '#343a40' }}>เรื่องย่อ</h3>
    <p>
      คิม ดกจา เป็นคนธรรมดาที่ใช้ชีวิตอ่านนิยายแฟนตาซีเรื่องโปรดจนจบ วันหนึ่งโลกกลับกลายเป็นเหมือนในนิยาย <span className="highlight">เขาคือคนเดียวที่รู้เนื้อเรื่องทั้งหมด!</span> การผจญภัยสุดระทึกเพื่อเอาชีวิตรอดและเปลี่ยนแปลงโชคชะตาจึงเริ่มต้นขึ้น
    </p>
  </section>

  <section>
    <h3>ตัวละครหลัก</h3>
    <ul> 
      <li><b>คิม ดกจา</b></li>
      <li><b>ยู จุงฮยอก</b></li>
      <li><b>ฮัน ซูยอง</b></li>
      <li><b>ยู ซังอา</b></li>
    </ul>
  </section>

  <section className="about-themes">
    <h3 style={{ color: '#343a40' }}>ประเด็นสำคัญ</h3>
    <ul>
      <li>การเอาชีวิตรอดในโลกที่เปลี่ยนไป</li>
      <li>พลังของเรื่องเล่าและวรรณกรรม</li>
      <li>มิตรภาพและความเสียสละ</li>
    </ul>
  </section>

  <section className="about-author">
    <h3 style={{ color: '#343a40' }}>เกี่ยวกับผู้แต่ง</h3>
    <ul>
      <li>เขียนโดย: ซิงซอง</li>
      <li>วาดภาพโดย: Sleepy-C (Redice Studio)</li>
    </ul>
  </section>
</main>
    </>
  );
}
