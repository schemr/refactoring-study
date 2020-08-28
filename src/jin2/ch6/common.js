const member = {
  name: "홍길동",
  annualSalary: 30000000,
  workingTime: 8,
  vacation: 15
};

export function acquireMember() {
  return member;
}

export class Member {
  constructor(data) {
    this._name = data.name;
    this._annualSalary = data.annualSalary;
    this._workingTime = data.workingTime;
    this._vacation = data.vacation;
  }
  get name() {return this._name;}
  get annualSalary() {return this._annualSalary;}
  get workingTime() {return this._workingTime;}
  get vacation() {return this._vacation;}

  get basicWage() {
    return Math.floor(
      (this.annualSalary / 12 / 209) * this.workingTime
    );
  }

  get buns() {
    return this.basicWage * this.vacation;
  }
}

export const mMember = new Member(member);