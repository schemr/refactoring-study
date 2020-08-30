const member = {
  name: "홍길동",
  annual_salary: 30000000,
  workingTime: 8,
  vacation: 15
};

export function acquireMember() {
  return member;
}

export class Member {
  constructor(data) {
    this._customer = data.customer;
    this._annual_salary = data.annual_salary;
    this._workingTime = data.workingTime;
    this._vacation = data.vacation;
  }

  get basicWageAmount() {
    return Math.floor((this._annual_salary / 12 / 209) * this._workingTime);
  }

  get bonusAmount() {
    return this.basicWageAmount * this._vacation;
  }
};