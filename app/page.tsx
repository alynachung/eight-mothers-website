import Link from 'next/link';

type Lang = 'zh' | 'en';

const dictionaries = {
  zh: {
    hero: {
      title: "從黑暗中升起",
      intro: "你我都只是塵土中微微發亮的一點光，來自星辰，也終將回到大地。在時間尚未開始之前，在空間尚未被分界之時，八母早已共同守護著這片土地，靜靜等待你的到來。",
      ctaBlessing: "領受祝福",
      ctaSteward: "成為認養家人",
    },
    worldview: {
      title: "八母共同守護的聖域",
      body: "這裡不只是一座花園，也不只是一項種植計畫。這是一塊正在被重新喚醒的土地，一座由八母守護、由人心共同灌溉的聖域。",
    }
  },
  en: {
    hero: {
      title: "From Darkness, We Rise",
      intro: "You and I are but a faint glimmer of light, born of dust and belonging to the stars. Before the beginning of time, beyond the boundaries of space, the Eight Mothers have long guarded this land, quietly awaiting your arrival.",
      ctaBlessing: "Receive the Blessing",
      ctaSteward: "Become a Steward",
    },
    worldview: {
      title: "A Sacred Land Guarded by the Eight Mothers",
      body: "This is not only a garden, nor merely a planting project. It is a living land being awakened once more—a sacred realm protected by the Eight Mothers and nurtured through collective human care.",
    }
  }
};

export default function HomePage({ params }: { params: { lang?: Lang } }) {
  const currentLang = params?.lang || 'zh';
  const dict = dictionaries[currentLang];

  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: '#0A0A0C', color: '#F5EFE6' }}>
      
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em]" style={{ color: '#D4C3A3' }}>
            {dict.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl opacity-80">
            {dict.hero.intro}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <Link 
              href="/blessing"
              className="px-8 py-4 font-medium tracking-wider transition-all duration-300 inline-block text-center"
              style={{ backgroundColor: '#C5A880', color: '#0A0A0C', borderRadius: '2px' }}
            >
              {dict.hero.ctaBlessing}
            </Link>
            
            {/* 🔗 這裡也接通了：點擊「成為認養家人」會直接前往 /stewardship */}
            <Link 
              href="/stewardship"
              className="px-8 py-4 border font-medium tracking-wider transition-all duration-300 inline-block text-center"
              style={{ borderColor: '#C5A880', color: '#D4C3A3', backgroundColor: 'transparent', borderRadius: '2px' }}
            >
              {dict.hero.ctaSteward}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-12">
          <div className="w-[1px] h-24 opacity-30" style={{ backgroundColor: '#C5A880' }} />
          <h2 className="text-3xl md:text-4xl font-light tracking-widest" style={{ color: '#D4C3A3' }}>
            {dict.worldview.title}
          </h2>
          <p className="text-lg leading-loose opacity-70">
            {dict.worldview.body}
          </p>
          <div className="w-[1px] h-24 opacity-30" style={{ backgroundColor: '#C5A880' }} />
        </div>
      </section>
{/* 3. 現地參與導引區塊 (對應藍圖 Pillar 4) */}
<section className="py-32 px-6 border-t" style={{ borderColor: 'rgba(197, 168, 128, 0.1)' }}>
  <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
    <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em]" style={{ color: '#D4C3A3' }}>
      從數位感官，回歸大地母親
    </h2>
    <p className="text-base opacity-60 leading-relaxed">
      當線上的祝福已然飽滿，我們邀請妳親自走入聖域，<br />
      聽風的聲音，觸摸土壤的溫度。
    </p>
    <Link 
      href="/visit"
      className="px-10 py-4 border tracking-[0.2em] font-light transition-all hover:bg-white/5"
      style={{ borderColor: '#C5A880', color: '#D4C3A3' }}
    >
      預約實地參與
    </Link>
  </div>
</section>
    </main>

  );
}