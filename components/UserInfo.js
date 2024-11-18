export default class UserInfo {
  constructor(nameElementSelector, jobElementSelector) {
    this.nameElement = document.querySelector(nameElementSelector);
    this.jobElement = document.querySelector(jobElementSelector);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      job: this.jobElement.textContent,
    };
  }
  setUserInfo(name, job) {
    this.nameElement.textContent = name;
    this.jobElement.textContent = job;
  }
}
