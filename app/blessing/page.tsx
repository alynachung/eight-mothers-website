'use client';

import { useState } from 'react';
import Link from 'next/link';

// 八母祝福資料庫
const DEITIES_DATA = [
  { id: 'west', zh: '西王母', en: 'Queen Mother of the West', text_zh: '立志、自律、長生', text_en: 'Aspiration, discipline, longevity', bg: '#2D221E' },
  { id: 'void', zh: '虛空地母', en: 'Mother Earth of the Void', text_zh: '承載、滋養、安住', text_en: 'Holding, nurturing, groundedness', bg: '#1E2522' },
  { id: 'cundi', zh: '準提佛母', en: 'Cundi Buddha Mother', text_zh: '覺醒、行動、突破', text_en: 'Awakening, action, breakthrough', bg: '#2A1E2D' },
  { id: 'birth', zh: '註生娘娘', en: 'Lady of Birth and Blessing', text_zh: '延續、流動、護佑', text_en: 'Continuity, flow, protection', bg: '#1E222D' },
  { id: 'accord', zh: '順天聖母', en: 'Celestial Mother of Accord', text_zh: '守正、內斂、智慧', text_en: 'Integrity, inwardness, wisdom', bg: '#202025' },
  { id: 'mystic', zh: '九天玄女', en: 'Mystic Lady of the Nine Heavens', text_zh: '明覺、表現、光明', text_en: 'Clarity, expression, radiance', bg: '#2D2D1E' },
  { id: 'holy', zh: '天上聖母', en: 'Heavenly Holy Mother', text_zh: '節制、安定、庇護', text_en: 'Restraint, steadiness, shelter', bg: '#1E2A2D' },
  { id: 'li', zh: '驪山老母', en: 'Old Mother of Mount Li', text_zh: '分享、喜悅、交流', text_en: 'Sharing, joy, communion', bg: '#251E2D' },
];

export default function BlessingPage() {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [result, setResult] = useState<typeof DEITIES_DATA[0] | null>(null);

  const handleDraw = () => {
    setStep(1); 
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * DEITIES_DATA.length);
      setResult(DEITIES_DATA[randomIndex]);
      setStep(2); 
    }, 3000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center font-sans px-6 text-center transition-all duration-1000"
          style={{ backgroundColor: result && step === 2 ? result.bg : '#0A0A0C', color: '#F5EFE6' }}>
      
      {/* 步驟 0：靜心引導頁面 */}
      {step === 0 && (
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
          <h1 className="text-3xl md:text-4xl font-light tracking-widest" style={{ color: '#D4C3A3' }}>
            領受屬於你的溫暖祝福
          </h1>
          <p className="text-base md:text-lg font-light leading-loose opacity-80 max-w-xl">
            請閉上眼睛，慢慢深呼吸三次。感受腳下的大地。想像你正站在八母聖域的中央。八母正環繞在你的四周，靜靜地看顧著你。此刻，在你的心中，最希望被祝福的是什麼？可以是一個牽掛，一份感謝，一道難題，或一個尚未說出口的願望。你不需要說出來，只需要在心裡輕輕地說。八母會聽見。
          </p>
          <button 
            onClick={handleDraw}
            className="mt-6 px-10 py-4 font-medium tracking-widest hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#C5A880', color: '#0A0A0C', borderRadius: '2px' }}
          >
            領受祝福
          </button>
        </div>
      )}

      {/* 步驟 1：儀式抽卡中 */}
      {step === 1 && (
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 border-2 border-t-transparent animate-spin" style={{ borderColor: '#C5A880', borderTopColor: 'transparent', borderRadius: '50%' }} />
          <p className="text-lg tracking-widest opacity-60 animate-pulse">八母正在聆聽你的心願，凝聚祝福中...</p>
        </div>
      )}

      {/* 步驟 2：顯示專屬母神祝福結果 */}
      {step === 2 && result && (
        <div className="max-w-xl mx-auto flex flex-col items-center gap-8">
          <p className="text-sm tracking-widest opacity-60 uppercase">This blessing has come for you</p>
          
          <h1 className="text-4xl md:text-5xl font-light tracking-widest" style={{ color: '#D4C3A3' }}>
            {result.zh}
          </h1>
          <p className="text-sm italic tracking-wide opacity-50 -mt-4">{result.en}</p>
          
          <div className="w-12 h-[1px] my-2" style={{ backgroundColor: '#C5A880' }} />
          
          <p className="text-2xl md:text-3xl font-light tracking-wider">
            「 {result.text_zh} 」
          </p>
          <p className="text-base font-light opacity-70 italic px-6">
            {result.text_en}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <button 
              onClick={() => { setStep(0); setResult(null); }}
              className="px-6 py-3 border font-light tracking-wider hover:bg-white/5 transition-all"
              style={{ borderColor: '#C5A880', color: '#D4C3A3' }}
            >
              再抽一次
            </button>
            <Link 
              href="/"
              className="px-6 py-3 font-light tracking-wider hover:opacity-90 transition-all"
              style={{ backgroundColor: '#C5A880', color: '#0A0A0C' }}
            >
              返回首頁
            </Link>
          </div>
        </div>
      )}

    </main>
  );
}