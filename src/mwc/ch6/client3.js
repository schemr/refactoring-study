import { acquireMember, Member } from "./common";
// 클라이언트 3
// 통상 임금 계산 함수
const aMember = acquireMember();
const aWorker = new Member(aMember);
export const basicWage = aWorker.basicWageAmount;
