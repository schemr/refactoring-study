import { acquireMember } from "./common";

// 클라이언트 1
// 통상 임금 계산 (세전 월 급여 / 월 총 근무시간) * 하루평균 근무 시간
const aMember = acquireMember();
export const basicWage = Math.floor(
  (aMember.annual_salary / 12 / 209) * aMember.workingTime
);
