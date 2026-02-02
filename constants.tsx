
import { LandingPageData } from './types';

export const INITIAL_DATA: LandingPageData = {
  hero: {
    title: "웹/앱 제작, 합리적인 비용으로 고성능 브랜딩과 개발을 제공합니다.",
    subtitle: "",
    description: "복잡한 과정이나 과도한 비용 걱정 없이 당신의 비전을 실현하세요. 데브에이전시가 기획부터 런칭까지 모든 과정을 책임집니다."
  },
  painPoints: {
    title: "모든 예산에 맞춘 고성능 솔루션",
    subtitle: "",
    description: "에이전시급 디자인과 효율적인 개발 프로세스를 결합하여 스타트업과 로컬 비즈니스의 성장을 돕습니다.",
    items: [
      "합리적인 가격",
      "뛰어난 퍼포먼스",
      "전문적인 브랜딩"
    ]
  },
  solution: {
    title: "",
    subtitle: "",
    description: ""
  },
  portfolio: {
    title: "최근 성공 사례",
    subtitle: "OUR PORTFOLIO",
    projects: [
      {
        id: "1",
        title: "Trendly",
        category: "이커머스 플랫폼",
        description: "수만 명의 사용자가 접속해도 안정적인 쇼핑몰. 초고속 결제와 모바일에 최적화된 경험을 제공합니다.",
        tags: ["React", "Node.js", "AWS"],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWxY_0T45RcXuqyGgckwKVdCan9N5f17PfZ_HDnTlK9dO3GWA1us7ggvF-S1A4Jdbt9P-banOFDcGJG42ImFm8dlyCAW4Ld3sNLBkZRt3fZJgCUb5ugb3-bY5p9iRpEqyLEB3bwqX3qifH05Za6A1_s5AEd3GNod_XRejTM4obI0hJYy_9avkzL3BQSLrdSNHCOeerNiIBo92-rswP8cooi3rL0pTKnc-oTU9k6iJjE8lK_e2OoEiw6qAUNTCIzDWSYuHNNXvU8eHP"
      },
      {
        id: "2",
        title: "SyncSpace",
        category: "B2B 협업 툴",
        description: "워크플로우를 최적화하는 B2B 협업 툴. 원격 팀의 프로젝트 관리를 단순화하는 솔루션입니다.",
        tags: ["Next.js", "PostgreSQL"],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2JmPkXNQglUhFRSfHdbBdgPUyuF8HUkrPPJ58ceYy9w-_dUiqNVrPzIhsH3gwjdC0dIpjGcWRStGgEZhnW83BrwyUqgdSdcYx5K1oRkXzYOKS72WSsSvH6mxvDuXh_HQURfky6eYRFCPX94twj7O9IPgH8ZFSpsqEF1dNGyr8_4Y_Pwgn4YomLCsbRJbxQ2SWQskhi1xr-R8TzcUHnCl6Cth2tsmI-Ipfprs-K6uiN1XAX4AOsXuXMl5y1V3CTb41OB0S7m3eq1dl"
      },
      {
        id: "3",
        title: "스마트 오더",
        category: "로컬 비즈니스",
        description: "매장 간편 주문 및 매출 관리 솔루션. 맞춤형 UI를 통해 주문 효율을 40% 이상 개선했습니다.",
        tags: ["Vue.js", "Mobile"],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkIiXjVYzldS59JaVGkZR-2QrGOHEtI35Pz5p5nQZ1Nerefw1SYa-2ENuRg1XvuupwASGFdOrpgsI3r_1GENvYnKx5LyTboWlclrkDt_6BwwclWy6yVpT_TKUKkEhPZ784oLYRJimTV1CYM8GgmeIK4LlhuHCaCC-h7qjeOqDIW6hqRPYOMWnKDXziv3OMrHJNB8mccTXIdt3Ilrlv6EWPoZfQ3JYes3PHdGrp_XrCvFBcI6QGEXOdDKdAPK7HNWm42Vh6NU125oZn"
      },
      {
        id: "4",
        title: "FitPulse",
        category: "헬스케어 앱",
        description: "맞춤형 루틴을 제공하는 헬스케어 앱. 높은 유지율과 접근성을 고려한 건강 관리 플랫폼입니다.",
        tags: ["Flutter", "Healthcare"],
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA2tGopVHyifcjYeUI1XAzy4N3-cUucqo1395tgwT2vat4xyWFjYMUj18j53ECqKFhFTpT56W3A0UciGUvvx1XNRo3uliKZfTuBCFuARy0pNJ_uu5C0PZ9a3r0-iYnMhvpiwDvxmH5cXc9K2oWpdy2FsMWaA621uYRe6Vsqm-H4IZJSgkZ1LTaNDg9ENRoDu_ss3WZMHYYsuAii3AkbFN4eblN95c2W_e79NEllXgabymaYuwdsk5pTZ1zkMZNj37XEGGhkguFERBN"
      }
    ]
  },
  process: {
    title: "성공적인 프로젝트를 위한 단계",
    steps: [
      { step: "01", label: "기획", desc: "아이디어를 구체화합니다." },
      { step: "02", label: "디자인", desc: "브랜드 아이덴티티를 수립합니다." },
      { step: "03", label: "개발", desc: "최신 기술로 구축합니다." },
      { step: "04", label: "완성", desc: "최종 런칭을 진행합니다." }
    ]
  },
  differentiation: {
    title: "",
    reasons: []
  },
  cta: {
    title: "멋진 프로젝트를 함께 시작할까요?",
    subtitle: "",
    description: "이미 50개 이상의 비즈니스가 데브에이전시와 함께 디지털 성장을 이루었습니다."
  }
};
