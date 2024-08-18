import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Home() {
  return (
    <div className="container mt-5"> {/* เพิ่มระยะห่างด้านบนและจัดกึ่งกลาง */}
      <div className="row justify-content-center"> {/* จัดกึ่งกลางแบบแนวนอน */}
        <div className="col-md-6"> {/* ปรับขนาดให้พอดี */}
          <div className="card shadow p-4"> {/* เพิ่มเงาและระยะห่างภายใน */}
            <h2 className="text-center mb-4">เข้าสู่ระบบ</h2>

            <div className="form-floating mb-3">
              <input 
                type="email" 
                className="form-control" 
                id="floatingInput" 
                placeholder="name@example.com" 
              />
              <label htmlFor="floatingInput" className="text-muted">อีเมล</label> 
            </div>

            <div className="form-floating">
              <input 
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password" 
              />
              <label htmlFor="floatingPassword" className="text-muted">รหัสผ่าน</label>
            </div>

            <button className="btn btn-primary w-100 mt-3">เข้าสู่ระบบ</button> {/* ปรับปุ่มให้เต็มความกว้าง */}
          </div>
        </div>
      </div>
    </div>
  );
}