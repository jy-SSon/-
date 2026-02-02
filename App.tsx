
import React, { useState } from 'react';
import { INITIAL_DATA } from './constants';
import { LandingPageData } from './types';

const Navbar: React.FC = () => (
  <header className="sticky top-0 z-50 w-full border-b border-solid border-[#f0f2f4] dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between whitespace-nowrap">
      <div className="flex items-center gap-3 text-primary">
        <div className="size-8">
          <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
          </svg>
        </div>
        <h2 className="text-[#111418] dark:text-white text-xl font-bold leading-tight tracking-tight">데브에이전시</h2>
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <a className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#">서비스</a>
          <a className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#portfolio">포트폴리오</a>
          <a className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#process">프로세스</a>
          <a className="text-[#111418] dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors" href="#contact">문의하기</a>
        </nav>
        <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90">
          <span>프로젝트 시작하기</span>
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <span className="material-symbols-outlined cursor-pointer">menu</span>
      </div>
    </div>
  </header>
);

const App: React.FC = () => {
  const [data] = useState<LandingPageData>(INITIAL_DATA);
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 md:py-24">
          <div className="flex flex-col gap-10 lg:flex-row items-center">
            <div className="flex flex-col gap-8 lg:w-1/2">
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl text-balance">
                  {data.hero.title}
                </h1>
                <p className="text-[#4a5568] dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
                  {data.hero.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#portfolio" className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/25 hover:translate-y-[-2px] transition-all">
                  <span>포트폴리오 보기</span>
                </a>
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-white dark:bg-gray-800 border border-[#e2e8f0] dark:border-gray-700 text-[#111418] dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                  <span>무료 견적 받기</span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-2xl overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfWdCESg0dnp8ul16qm4TITrSLWZZimq1qiSZ-COkRBheuGQzTr7tBL4GUvJ1KmQW_B9Jb6nLKNlTfaXcRGbmUsGaz_GAjfIcW4sHGzTGiWGTinMQCc6h5teZYtTp9LabouD3DOgHOm4dzHpaGUp233FIC0UQAP5pgmmdHPcI9Hbq34yMNeVwh3Zw1b75VTOeQJslPO-04XgTxWf-Sxa7HClj_Wd1yUNM5EkFXQT5icl9QPM92qzDnq7QEBp0AzsXZGnmiMkcpFYz8")' }}>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white dark:bg-gray-900 py-20 border-y border-[#f0f2f4] dark:border-gray-800">
          <div className="max-w-[1280px] mx-auto px-4 md:px-10">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4 text-center items-center">
                <h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight md:text-4xl">
                  {data.painPoints.title}
                </h2>
                <p className="text-[#617589] dark:text-gray-400 text-lg max-w-[720px]">
                  {data.painPoints.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-background-light dark:bg-gray-800 p-8 hover:shadow-md transition-shadow">
                  <div className="text-primary size-12 flex items-center justify-center bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-3xl">payments</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#111418] dark:text-white text-xl font-bold">합리적인 가격</h3>
                    <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                      숨겨진 비용이나 과도한 거품이 없습니다. 고객의 예산을 존중하는 투명하고 고정된 견적을 제공합니다.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-background-light dark:bg-gray-800 p-8 hover:shadow-md transition-shadow">
                  <div className="text-primary size-12 flex items-center justify-center bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-3xl">bolt</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#111418] dark:text-white text-xl font-bold">뛰어난 퍼포먼스</h3>
                    <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                      Next.js, Tailwind 등 최신 기술 스택을 사용하여 즉각적인 로딩과 유연한 확장을 보장합니다.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-background-light dark:bg-gray-800 p-8 hover:shadow-md transition-shadow">
                  <div className="text-primary size-12 flex items-center justify-center bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-3xl">palette</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#111418] dark:text-white text-xl font-bold">전문적인 브랜딩</h3>
                    <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
                      단순한 제작을 넘어 독창적인 시각적 정체성을 구축하여 시장에서 돋보일 수 있도록 돕습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="max-w-[1280px] mx-auto px-4 md:px-10 py-24">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">{data.portfolio.subtitle}</span>
            <h2 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-tight">{data.portfolio.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.portfolio.projects.map((project) => (
              <div key={project.id} className="group flex flex-col gap-4 overflow-hidden rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 transition-all hover:shadow-2xl">
                <div className="w-full bg-center bg-no-repeat aspect-[16/10] bg-cover transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${project.imageUrl}")` }}></div>
                <div className="p-6 pt-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded tracking-wider">{project.category}</span>
                  </div>
                  <h3 className="text-[#111418] dark:text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[#617589] dark:text-gray-400 text-base leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex items-center text-primary font-bold text-sm cursor-pointer hover:gap-2 transition-all">
                    자세히 보기 <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-10 py-20">
          <div className="bg-primary rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24"></div>
            <div className="relative z-10 flex flex-col gap-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black">{data.cta.title}</h2>
              <p className="text-white/80 text-lg md:text-xl max-w-xl">
                {data.cta.description}
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
                프로젝트 시작하기
              </button>
              <button className="bg-primary/20 border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                전문가와 상담하기
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 py-12">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-4">
            <div className="flex items-center gap-3 text-primary">
              <div className="size-6">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                </svg>
              </div>
              <h2 className="text-[#111418] dark:text-white text-lg font-bold">데브에이전시</h2>
            </div>
            <div className="flex gap-8 text-[#617589] dark:text-gray-400 text-sm">
              <a className="hover:text-primary transition-colors" href="#">개인정보 처리방침</a>
              <a className="hover:text-primary transition-colors" href="#">이용약관</a>
              <a className="hover:text-primary transition-colors" href="#">쿠키 정책</a>
            </div>
            <div className="text-[#617589] dark:text-gray-400 text-sm">
              © {currentYear} 손재영. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
