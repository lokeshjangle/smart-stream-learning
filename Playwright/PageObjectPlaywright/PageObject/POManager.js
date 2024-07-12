import { DashboardPage } from './DashboardPage';
import { LoginPage } from './LoginPage';
import { OrdersPage } from './OrdersPage';
import { PlaceOrderPage } from './PlaceOrderPage';

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.ordersPage = new OrdersPage(this.page);
    this.placeOrderPage = new PlaceOrderPage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }

  getPlaceOrderPage() {
    return this.placeOrderPage;
  }

  getOrdersPage() {
    return this.ordersPage;
  }
}

export { POManager };
