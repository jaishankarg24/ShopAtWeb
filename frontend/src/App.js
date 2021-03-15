import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './container/HomeScreen'
import ProductScreen from './container/ProductScreen'
import CartScreen from './container/CartScreen'
import LoginScreen from './container/LoginScreen'
import RegisterScreen from './container/RegisterScreen'
import ProfileScreen from './container/ProfileScreen'
import ShippingScreen from './container/ShippingScreen'
import PaymentScreen from './container/PaymentScreen'
import PlaceOrderScreen from './container/PlaceOrderScreen'
import OrderScreen from './container/OrderScreen'
import UserListScreen from './container/UserListScreen'
import UserEditScreen from './container/UserEditScreen'
import ProductListScreen from './container/ProductListScreen'
import ProductEditScreen from './container/ProductEditScreen'
import OrderListScreen from './container/OrderListScreen'


function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />

          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />

          <Route path='/admin/productlist' component={ProductListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />

          <Route path='/admin/orderlist' component={OrderListScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
