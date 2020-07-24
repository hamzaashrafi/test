import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeContainer } from './Container'
import { connect } from 'react-redux'
import './App.css';
import 'antd/dist/antd.css';


const PageNotFound = () => {
  return <h1>Page Not Found</h1>
}
export class Routing extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <>sadasdsadasd</>
          <Switch>
            <Route exact path='/'>
              {/* {loginSucces ? <Home /> : <LoginContainer />} */}
              <HomeContainer />
            </Route>
            <Route><PageNotFound /></Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    isLoggin: auth.isLoggin,
  }
};
export default connect(mapStateToProps, null)(Routing);
