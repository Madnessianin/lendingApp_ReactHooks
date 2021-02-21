import React from 'react'
import './App.scss';
import 'antd/dist/antd.css';
import { Button, Col, Layout, Row } from 'antd';
import logo from './assets/img/Group.png'
import icon from './assets/img/Vector.png'
import { Redirect, Route, Switch } from 'react-router-dom';
import Statement from './Component/Statement/Statement';

const { Header, Content, Footer } = Layout;

const styleHeder = {
  background: '#3684E2',
  color: '#fff',
  padding: '0 12.5%',
  height: '88px'
}
const styleLayout = {
  minHeight: '100vh',
  color: '#000',
  background: '#E5E5E5'
}
const styleBtnOut = {
  color: '#fff'
}
const styleFooter = {
  background: '#E5E5E5',
  textAlign: 'center' 
}

const App = () => {
  
  return (
    <Layout style={styleLayout}>
      <Header style={styleHeder}>
        <Row>
          <Col flex={2}>
            <div className="header_item">
              <img className="header_logo" src={logo} />
              <h2 className="header_title">Услуги и сервисы Пермского края</h2>
            </div>
          </Col>
          <Col flex={3}>
            <div className="header_item header_item--right">
              <img className="header_icon" src={icon} />
              <h4 className="header_user_name">Константинопольский К.К</h4>
              <div className="header_btn_out">
                <Button size="large" style={styleBtnOut} type="link">Выйти</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '0 12.5%'}}>
        <div  className="content">
          <Switch>
            <Route exact path='/' render = {()=><Redirect to = {'/statement'}/>} />
            <Route path='/statement' render = {()=><Statement />} />
          </Switch>
        </div>
      </Content>
      <Footer style={styleFooter}>Services of the Perm region page. Created by Alex</Footer>
  </Layout>
  );
}

export default App;
