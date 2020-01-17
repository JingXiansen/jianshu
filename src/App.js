import React,{ Component }  from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import {GlobalStyle} from './style';
import {GlobalStyle2} from './statics/iconfont/iconfont';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';



class App extends Component {
  render() {
    return (
      <Provider store={store}>  
        <div>   
          <GlobalStyle />
          <GlobalStyle2 />            
          <BrowserRouter>
          <Header />
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
            </div>
          </BrowserRouter>
        </div> 
      </Provider>   
    );
  }  
}

export default App;
