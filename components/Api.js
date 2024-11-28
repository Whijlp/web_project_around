class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers || {};
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}`, {
      ...this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  // otros métodos para trabajar con la API
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "df6c9fa0-1290-4e49-8529-ee99e5f3fc80",
    "Content-Type": "application/json",
  },
});

export default api;
