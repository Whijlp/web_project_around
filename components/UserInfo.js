export default class UserInfo {
  constructor(nameElementSelector, jobElementSelector, avatar) {
    this.nameElement = document.querySelector(nameElementSelector);
    this.jobElement = document.querySelector(jobElementSelector);
    this.avatar = document.querySelector(avatar);
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
