class Api {
  constructor(options) {
    this.baseURL = options.baseURL;
    this.headers = options.headers || {};
  }

  getInitialCards() {
    return fetch(`${this.baseURL}/cards`, {
      method: "GET",
      headers: {
        ...this.headers,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error: ${res.status}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getUserInfo() {
    return fetch(`${this.baseURL}/users/me`, {
      method: "GET",
      headers: {
        ...this.headers,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  editUserInfo(body) {
    return fetch(`${this.baseURL}/users/me`, {
      method: "PATCH",
      headers: {
        ...this.headers,
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  // otros métodos para trabajar con la API
}

const api = new Api({
  baseURL: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "327c3904-1c97-4a31-961f-faa6d3ffb204",
    "Content-Type": "application/json",
  },
});

export default api;
