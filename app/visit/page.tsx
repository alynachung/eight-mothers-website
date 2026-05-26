'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VisitPage() {
  const [isBooked, setIsBooked] = useState(false);

  return (
    <main className="min-h-screen font-sans relative" style={{ backgroundColor: '#0A0A0C', color: '#F5EFE6' }}>
      
      {/* 🆕 左上角常駐返回首頁按鈕 */}
      {!isBooked && (
        <div className="absolute top-8 left-8 z-10">
          <Link href="/" className="text-sm opacity-60 hover:opacity-100 transition-all flex items-center gap-2" style={{ color: '#D4C3A3' }}>
            ← 返回首頁
          </Link>
        </div>
      )}

      {/* Header 視覺區 */}
      <section className="py-20 px-6 text-center border-b" style={{ borderColor: 'rgba(197, 168, 128, 0.1)' }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em]" style={{ color: '#D4C3A3' }}>
            實地參與：歸鄉之旅
          </h1>
          <p className="text-sm tracking-widest opacity-60 uppercase">Physical Landing: The O2O Journey</p>
          <div className="w-12 h-[1px] my-4" style={{ backgroundColor: '#C5A880' }} />
          <p className="text-lg font-light leading-relaxed opacity-80">
            將線上的祝福，帶回真實的土地。<br />
            八母聖域不只是螢幕上的光影，它是可以觸摸、可以呼吸、可以親自種下希望的聖所。
          </p>
        </div>
      </section>

      {/* 三大核心流程 */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center gap-6 p-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl border" style={{ borderColor: '#C5A880', color: '#C5A880' }}>1</div>
            <h3 className="text-xl tracking-widest" style={{ color: '#D4C3A3' }}>聖域計畫理解</h3>
            <p className="text-sm opacity-70 leading-loose">線上瀏覽八母八卦空間配置與原生植物，理解每一棵樹、每一株草與靈性系統的連結。</p>
          </div>
          <div className="flex flex-col items-center text-center gap-6 p-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl border" style={{ borderColor: '#C5A880', color: '#C5A880' }}>2</div>
            <h3 className="text-xl tracking-widest" style={{ color: '#D4C3A3' }}>報名預約回訪</h3>
            <p className="text-sm opacity-70 leading-loose">透過 Visit 模組報名回歸體驗，獲得正式實地訪視資訊、交通與注意事項。</p>
          </div>
          <div className="flex flex-col items-center text-center gap-6 p-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl border" style={{ borderColor: '#C5A880', color: '#C5A880' }}>3</div>
            <h3 className="text-xl tracking-widest" style={{ color: '#D4C3A3' }}>實地復育</h3>
            <p className="text-sm opacity-70 leading-loose">親自到達現場，領取祝福袋，親手將種子或樹苗植入土地，成為真實的土地守護者。</p>
          </div>
        </div>
      </section>

      {/* 預約表單區塊 */}
      <section className="py-20 px-6" style={{ backgroundColor: '#141418' }}>
        <div className="max-w-xl mx-auto">
          {!isBooked ? (
            <div className="flex flex-col gap-10">
              <div className="text-center">
                <h2 className="text-2xl font-light tracking-widest mb-4" style={{ color: '#D4C3A3' }}>預約您的歸鄉時刻</h2>
                <p className="text-sm opacity-60">我們將為您準備專屬的實地導覽與祝福物。</p>
              </div>
              <div className="flex flex-col gap-6 p-8 border" style={{ borderColor: 'rgba(197, 168, 128, 0.2)' }}>
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest opacity-60 uppercase">您的家族編號 (Family Number)</label>
                  <input type="text" placeholder="例如：MEMBER-88203" className="w-full bg-transparent border-b py-3 focus:outline-none focus:border-white transition-all" style={{ borderColor: 'rgba(197, 168, 128, 0.4)' }} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest opacity-60 uppercase">預計回訪日期</label>
                  <input type="date" className="w-full bg-transparent border-b py-3 focus:outline-none focus:border-white transition-all" style={{ borderColor: 'rgba(197, 168, 128, 0.4)' }} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest opacity-60 uppercase">同行人數</label>
                  <select className="w-full bg-transparent border-b py-3 focus:outline-none" style={{ borderColor: 'rgba(197, 168, 128, 0.4)', color: '#F5EFE6' }}>
                    <option className="bg-black">1 人 (自己)</option>
                    <option className="bg-black">2-4 人 (家人同行)</option>
                    <option className="bg-black">5 人以上 (團體預約)</option>
                  </select>
                </div>
                <button onClick={() => setIsBooked(true)} className="w-full py-4 mt-6 tracking-[0.2em] font-medium transition-all" style={{ backgroundColor: '#C5A880', color: '#0A0A0C' }}>
                  確認提交預約
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center flex flex-col items-center gap-8 animate-fade-in">
              <div className="w-20 h-20 rounded-full border flex items-center justify-center text-3xl" style={{ borderColor: '#C5A880', color: '#C5A880' }}>✓</div>
              <h2 className="text-3xl font-light tracking-widest" style={{ color: '#D4C3A3' }}>預約成功，靜候歸期</h2>
              <p className="text-sm leading-relaxed opacity-70">
                您的預約已進入八母聖域的排程。<br />
                後續將由導引人透過 Email 與您聯繫詳細的集合地點與交通建議。
              </p>
              <Link href="/" className="px-10 py-3 border tracking-widest text-sm hover:bg-white/5 transition-all" style={{ borderColor: '#C5A880', color: '#D4C3A3' }}>
                返回首頁
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}