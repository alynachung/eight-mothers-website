'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StewardshipPage() {
  // 表單狀態：0 = 填寫中, 1 = 送出成功 (顯示家族編號)
  const [formStep, setFormStep] = useState<0 | 1>(0);
  const [familyNumber, setFamilyNumber] = useState('');
  
  // 表單欄位資料
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '1888',
    message: '',
    bankAccount: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('請填寫必填欄位 (姓名與 Email)');
      return;
    }
    
    // 隨機生成一個精美的唯一家族編號，例如 MEMBER-88203
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    setFamilyNumber(`MEMBER-${randomNum}`);
    setFormStep(1);
  };

  return (
    <main className="min-h-screen font-sans py-20 px-6 flex flex-col items-center justify-center" style={{ backgroundColor: '#0A0A0C', color: '#F5EFE6' }}>
      
      {formStep === 0 ? (
        /* 填寫表單狀態 */
        <div className="max-w-xl w-full mx-auto flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-3xl font-light tracking-widest mb-4" style={{ color: '#D4C3A3' }}>
              成為八母園家人
            </h1>
            <p className="text-sm opacity-70 leading-relaxed">
              八母的大地，需要守護者。每一位參與認養的人，都將成為這個聖域家族的一員。你的名字將被記錄在這片土地的家譜之中，八母的祝福也將一路與你同行。
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 rounded-sm" style={{ backgroundColor: '#141418', border: '1px solid rgba(197, 168, 128, 0.1)' }}>
            
            {/* 1. 姓名 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm tracking-wider" style={{ color: '#D4C3A3' }}>守護者姓名 (必填)</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-earth-500 transition-all"
                style={{ backgroundColor: '#0A0A0C', border: '1px solid rgba(197, 168, 128, 0.2)', color: '#F5EFE6' }}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* 2. Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm tracking-wider" style={{ color: '#D4C3A3' }}>電子信箱 Email (必填)</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none"
                style={{ backgroundColor: '#0A0A0C', border: '1px solid rgba(197, 168, 128, 0.2)', color: '#F5EFE6' }}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* 3. 認養方案選擇 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm tracking-wider" style={{ color: '#D4C3A3' }}>選擇你的認養心意 (NTD)</label>
              <select 
                className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none appearance-none"
                style={{ backgroundColor: '#0A0A0C', border: '1px solid rgba(197, 168, 128, 0.2)', color: '#F5EFE6' }}
                value={formData.amount}
                onChange={(e) => setFormData({...formData, amount: e.target.value})}
              >
                {['1888', '2888', '3888', '4888', '5888', '6888', '7888', '8888', '9888'].map((amt) => (
                  <option key={amt} value={amt}>方案金額：NT$ {amt}</option>
                ))}
              </select>
            </div>

            {/* 4. 祝福留言 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm tracking-wider" style={{ color: '#D4C3A3' }}>大地的祝福留言 (選填)</label>
              <textarea 
                rows={3}
                className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none resize-none"
                style={{ backgroundColor: '#0A0A0C', border: '1px solid rgba(197, 168, 128, 0.2)', color: '#F5EFE6' }}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            {/* 5. 零預算小資金流手動導引區 */}
            <div className="p-4 rounded-sm text-xs leading-relaxed border border-dashed flex flex-col gap-2 mt-2" style={{ backgroundColor: '#0A0A0C', borderColor: 'rgba(197, 168, 128, 0.3)', color: '#D4C3A3' }}>
              <p className="font-medium text-center text-sm border-b pb-2 mb-1" style={{ borderColor: 'rgba(197, 168, 128, 0.1)' }}>🌱 匯款支持資訊</p>
              <p>☀️ 銀行代碼：007 第一銀行</p>
              <p>☀️ 轉帳帳號：123-45-678901 (範例帳戶)</p>
              <p className="opacity-80">※ 請匯款對應的方案金額後，於下方留下您的轉帳帳號後五碼，以便我們核對大地的守護心意。</p>
            </div>

            {/* 6. 帳號末五碼 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm tracking-wider" style={{ color: '#D4C3A3' }}>轉帳帳號末五碼</label>
              <input 
                type="text" 
                placeholder="例如：88888"
                className="w-full px-4 py-3 rounded-sm text-sm focus:outline-none"
                style={{ backgroundColor: '#0A0A0C', border: '1px solid rgba(197, 168, 128, 0.2)', color: '#F5EFE6' }}
                value={formData.bankAccount}
                onChange={(e) => setFormData({...formData, bankAccount: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 mt-4 font-medium tracking-widest hover:opacity-90 transition-all duration-300 rounded-sm"
              style={{ backgroundColor: '#C5A880', color: '#0A0A0C' }}
            >
              提交認養登記
            </button>
          </form>
        </div>
      ) : (
        /* 提交成功狀態 (Success Page) */
        <div className="max-w-md mx-auto text-center flex flex-col items-center gap-8 animate-fade-in">
          <div className="w-16 h-16 flex items-center justify-center rounded-full text-2xl" style={{ border: '2px solid #C5A880', color: '#C5A880' }}>
            ✓
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-light tracking-widest" style={{ color: '#D4C3A3' }}>
              恭喜你，已成為八母園家人
            </h1>
            <p className="text-sm opacity-60">Congratulations, You Are Now Part of the Garden</p>
          </div>
          
          <div className="py-6 px-10 rounded-sm w-full my-2 flex flex-col gap-2" style={{ backgroundColor: '#141418', border: '1px solid rgba(197, 168, 128, 0.2)' }}>
            <span className="text-xs opacity-50 tracking-wider uppercase">您的專屬家族編號</span>
            <span className="text-2xl font-mono font-medium tracking-widest" style={{ color: '#C5A880' }}>{familyNumber}</span>
          </div>

          <p className="text-sm leading-relaxed opacity-70 max-w-sm">
            在未來的現地種植日，你將收到屬於你的祝福袋。手動確認匯款完成後，我們將會發送正式確認信件至您的信箱。感謝你，成為這片土地的守護者。
          </p>

          <Link 
            href="/"
            className="mt-4 px-8 py-3 border font-light tracking-wider hover:bg-white/5 transition-all"
            style={{ borderColor: 'rgba(197, 168, 128, 0.4)', color: '#D4C3A3', borderRadius: '2px' }}
          >
            返回首頁
          </Link>
        </div>
      )}

    </main>
  );
}