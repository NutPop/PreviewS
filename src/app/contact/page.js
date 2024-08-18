import Image from "next/image";
import Link from 'next/link';
import LogorinaImage from './Logorina.jpg';
import discordIcon from './discord.jpg';
import telegramIcon from './telegram.png';
import contactBg from './contactBg.jpg'; // เพิ่มรูปภาพพื้นหลัง
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
  <section style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
  <Image
    src={contactBg}
    alt="Contact Background"
    layout="fill"
    objectFit="cover"
    quality={100}
    style={{ position: 'absolute', top: 0, left: 0 }} 
  />
  <div style={{
    position: 'relative', // เปลี่ยนเป็น relative
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',   

  }}>
    <h1>ติดต่อเรา</h1>
    <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginTop: '10px' }}> 
      ร่วมเป็นส่วนหนึ่งในการเปลี่ยนแปลงโชคชะตา
    </h2> 
  </div>
</section>


        <section style={{ padding: '50px 0', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}> 
            <h2>ส่งข้อความหาเรา</h2>
            <form>
              {/* ... (ฟอร์มเหมือนเดิม) ... */}
            </form>
          </div>
        </section>

        <section style={{ padding: '50px 0', backgroundColor: '#f8f9fa', textAlign: 'center' }}> 
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>ช่องทางการติดต่ออื่นๆ</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
              <li style={{ margin: '0 15px' }}>
                <a href="https://discord.gg/your-discord-link" target="_blank" rel="noopener noreferrer">
                  <Image src={discordIcon} alt="Discord" width={50} height={50} />
                </a>
              </li>
              <li style={{ margin: '0 15px' }}>
                <a href="https://t.me/your-telegram-link" target="_blank" rel="noopener noreferrer">
                  <Image src={telegramIcon} alt="Telegram" width={50} height={50} />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

  </>
  );
}
