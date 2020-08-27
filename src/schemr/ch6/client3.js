import { acquireMember, Member } from "./common";
// 클라이언트 3
// 통상 임금 계산 함수
const rawMember = acquireMember();
const aMember = new Member(rawMember);
export const basicWage = aMember.basicWage;
