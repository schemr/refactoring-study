const MONTHS_WORKING_TIME = 209;
const MONTHS_NUMBER = 12;

const member = {
  name: "홍길동",
  annual_salary: 30000000,
  workingTime: 8,
  vacation: 15
};

export function acquireMember() {
  return member;
}

export class Worker {
  constructor(data){
    this.name = data.name;
    this.annual_salary = data.annual_salary;
    this.workingTime = data.workingTime;
    this.vacation = data.vacation;
  }

  calculateBasicWage(){
    return Math.floor((this.annual_salary / MONTHS_NUMBER / MONTHS_WORKING_TIME) * this.workingTime);
  }

  calculateBonus(){
    return this.basicWage * this.vacation;
  }

  get basicWage(){
    return this.calculateBasicWage();
  }

  get bonusAmount(){
    return this.calculateBonus();
  }
}
