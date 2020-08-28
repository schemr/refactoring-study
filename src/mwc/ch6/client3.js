import { acquireMember, Worker } from "./common";
// 클라이언트 3
// 통상 임금 계산 함수
const aMember = acquireMember();
const aWorker = new Worker(aMember);

export const basicWage = aWorker.basicWage;
