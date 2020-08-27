const member = {
  name: "홍길동",
  annual_salary: 30000000,
  workingTime: 8,
  vacation: 15
};

export function acquireMember() {
  return member;
}

const MONTH_WORKING_TIME = 209;
const MONTH_NUMBER = 12;
export class Worker {
  consturctor(data){
    this.name = data.named;
    this.annual_salary = data.annual_salary;
    this.workingTime = data.workingTime;
    this.vacation = data.vacation;
  }

  get name(){
    return this.name;
  }

  get annual_salary(){
    return this.annual_salary;
  }

  get workingTime(){
    return this.workingTime;
  }

  get vacation(){
    return this.vacation;
  }

  get basicWage(){
    return this.basicWage();
  }

  basicWage(){
    return (annual_salary / MONTH_NUMBER / MONTH_WORKING_TIME) * this.workingTime;
  }
}
