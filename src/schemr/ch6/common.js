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
    this._name = data.name;
    this._annual_salary = data.annual_salary;
    this._workingTime = data.workingTime;
    this._vacation = data.vacation;
  }

  get name() {
    return this._name;
  }
  get annual_salary() {
    return this._annual_salary;
  }
  get workingTime() {
    return this._workingTime;
  }
  get vacation() {
    return this._vacation;
  }
  get basicWage() {
    return Math.floor((this.annual_salary / 12 / 209) * this.workingTime);
  }
  get bonus() {
    return this.basicWage * this.vacation;
  }
}
