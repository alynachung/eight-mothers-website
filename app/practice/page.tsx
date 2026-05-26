'use client';

import Link from 'next/link';

export default function PracticePage() {
  const cases = [
    {
      num: "01",
      title: "原生草藥復育與八卦空間配置",
      subtitle: "Ecological Restoration",
      desc: "我們將認養資金投入土地的實地復育。依據八母聖域的八卦方位，栽種對應的原生植物與心靈草藥。每一位認養家人所支持的植株，都將成為這片聖域生態網絡的一分子，重新喚醒大地的滋養力量。"
    },
    {
      num: "02",
      title: "家人歸鄉之旅與現地大地儀式",
      subtitle: "Sacred Ritual & Gathering",
      desc: "運用的範例包含定期的現地復育種植日。認養家人可以透過 Visit 模組預約回到現地，親手接引大地的祝福袋，將心願種子親手植入土中，並在導引人的帶領下，參與圍繞聖域中央的靜心觀照儀式。"
    },
    {
      num: "03",
      title: "大地家譜建立與永續生態紀錄",
      subtitle: "The Living Heritage",
      desc: "每位家人的守護心意與專屬「家族編號」，都將被永久記錄於聖域的實體與數位家譜中。我們會透過影像與季節報告，向所有家人更新這片土地的呼吸與成長，達成從線上祝福到實地共生的永續循環。"
    }
  ];

  return (
    <main className="min-h-screen font-sans pb-24 relative" style={{ backgroundColor: '#0A0A0C', color: '#F5EFE6' }}>
      
      {/* 左上角常駐返回首頁按鈕 */}
      <div className="absolute top-8 left-8 z-10">
        <Link href="/" className="text-sm opacity-60 hover:opacity-100 transition-all flex items-center gap-2" style={{ color: '#D4C3A3' }}>
          ← 返回首頁
        </Link>
      </div>

      {/* 1. Header 標題區 */}
      <section className="pt-28 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-3xl md:text-5xl font-light tracking-[0.3em]" style={{ color: '#D4C3A3' }}>
            聖域實踐：如何運用
          </h1>
          <p className="text-sm tracking-widest opacity-60 uppercase">Our Practice & Application Cases</p>
          <div className="w-12 h-[1px] my-4" style={{ backgroundColor: '#C5A880' }} />
          <p className="text-base font-light leading-loose opacity-80 max-w-2xl">
            八母園計畫如何將線上的靈性關照，轉化為真實大地的復育行動？<br />
            以下是我們凝聚眾人守護心意、落地實踐的三大核心範例。
          </p>
        </div>
      </section>

      {/* 2. 運用範例卡片區 */}
      <section className="px-6 max-w-5xl mx-auto flex flex-col gap-12">
        {cases.map((item, index) => (
          <div 
            key={index} 
            className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start rounded-sm transition-all hover:translate-x-1" 
            style={{ backgroundColor: '#141418', border: '1px solid rgba(197, 168, 128, 0.1)' }}
          >
            {/* 數字大標 */}
            <div className="text-4xl md:text-5xl font-mono font-light opacity-30 md:w-20" style={{ color: '#C5A880' }}>
              {item.num}
            </div>
            
            {/* 內容內文 */}
            <div className="flex-1 flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-light tracking-wide" style={{ color: '#D4C3A3' }}>
                {item.title}
              </h3>
              <span className="text-xs tracking-widest uppercase opacity-40 -mt-1 block font-mono">{item.subtitle}</span>
              <p className="text-sm md:text-base opacity-75 leading-relaxed font-light mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 3. 底部引導行動區 */}
      <section className="mt-20 text-center px-6">
        <div className="max-w-md mx-auto flex flex-col gap-6">
          <p className="text-sm opacity-60">理解了運用的方向，妳也想成為守護土地的一員嗎？</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/stewardship" 
              className="px-8 py-3 font-medium text-sm tracking-wider transition-all"
              style={{ backgroundColor: '#C5A880', color: '#0A0A0C' }}
            >
              成為認養家人
            </Link>
            <Link 
              href="/" 
              className="px-8 py-3 border font-light text-sm tracking-wider transition-all hover:bg-white/5"
              style={{ borderColor: 'rgba(197, 168, 128, 0.4)', color: '#D4C3A3' }}
            >
              返回首頁
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}