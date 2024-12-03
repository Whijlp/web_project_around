export default class UserInfo {
  constructor(nameElementSelector, jobElementSelector, avatarElementSelector) {
    console.log(avatarElementSelector);
    this.nameElement = document.querySelector(nameElementSelector);
    this.jobElement = document.querySelector(jobElementSelector);
    this.avatarElement = document.querySelector(avatarElementSelector);
  }

  getUserInfo() {
    return {
      name: this.nameElement.textContent,
      job: this.jobElement.textContent,
      link: this.avatarElement.src,
    };
  }
  setUserInfo(name, job, link) {
    this.nameElement.textContent = name;
    this.jobElement.textContent = job;

    if (link) {
      this.avatarElement.src = link;
    }
  }
}
