const member = {
  name: "홍길동",
  annualSalary: 30000000,
  workingTime: 8,
  vacation: 15
};

export function acquireMember() {
  return member;
}

class Member {
  constructor(data) {
    this._name = data.name;
    this._annualSalary = data.annualSalary;
    this._workingTime = data.workingTime;
    this._vacation = data.vacation;
  }
}