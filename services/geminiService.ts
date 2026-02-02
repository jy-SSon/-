
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const refineCopy = async (section: string, currentText: string, targetAudience: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        당신은 10년 차 베테랑 UI/UX 기획자이자 전환율 최적화(CRO) 전문가입니다.
        현재 섹션: ${section}
        현재 문구: ${currentText}
        타겟 고객: ${targetAudience}

        위 문구를 타겟 고객의 마음을 사로잡고 신뢰를 줄 수 있는 매력적인 카피라이팅으로 다듬어 주세요.
        지인에게 말하듯 친절하면서도 전문성이 느껴져야 합니다.
        오직 다듬어진 문구만 반환하세요.
      `,
      config: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });

    return response.text?.trim() || currentText;
  } catch (error) {
    console.error("Gemini Error:", error);
    return currentText;
  }
};
