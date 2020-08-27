import { acquireMember } from "./common";
// 클라이언트 3
// 통상 임금 계산 함수
const aMember = acquireMember();
export const basicWageAmount = calculatebasicWageAmount(aMember);
function calculatebasicWageAmount(aMember) {
  return Math.floor((aMember.annual_salary / 12 / 209) * aMember.workingTime);
}
