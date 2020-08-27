import { acquireMember, Member } from "./common";

// 클라이언트 2
// 연차 수당 계산 {(세전 월 급여 / 209) X 하루평균 근무시간} X 잔여 연차일수
const rawMember = acquireMember();
const aMember = new Member(rawMember);
export const basicWage = aMember.basicWage;
export const bonus = XXbonus(aMember);

function XXbonus(aMember) {
  return aMember.basicWage * aMember.vacation;
}
