class APiUtils {
  constructor(apiContext, loginPayLoad) {
    this.apiContext = apiContext;
    this.loginPayLoad = loginPayLoad;
  }

  //get Token
  async getToken() {
    const loginResponse = await this.expectapiContext.post(
      `https://rahulshettyacademy.com/api/ecom/auth/login`,
      {
        data: this.loginPayLoad,
      }
    );
    // expect(loginResponse.ok()).toBeTruthy(); //assertion for check response return 200,201 status code
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);
    return token;
  }

  //Create order
  async createOrder(orderPayLoad) {
    let response = {};
    response.token = await this.getToken();
    const orderResponse = await this.apiContext.post(
      `https://rahulshettyacademy.com/api/ecom/order/create-order`,
      {
        data: orderPayLoad,
        headers: {
          Authorization: response.token,
          'Content-Type': 'application/json',
        },
      }
    );
    // expect(orderResponse.ok()).toBeTruthy();
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orderId = orderResponseJson.orders[0];
    response.orderId = orderId;
    return response;
  }
}

export default { APIUtils };
