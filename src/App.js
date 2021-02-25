import React from 'react'
import './App.scss';
import 'antd/dist/antd.css';
import { Button, Col, Layout, Row } from 'antd';
import logo from './assets/img/Group.png'
import icon from './assets/img/Vector.png'
import { Redirect, Route, Switch } from 'react-router-dom';
import Statement from './Component/Statement/Statement';
import { styleBtnOut, styleFooter, styleHeder, styleLayout } from './StyleForAntd';

const { Header, Content, Footer } = Layout;

const App = () => {
  
  return (
    <Layout style={styleLayout}>
      <Header style={styleHeder}>
          <div className="header_inner">
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
        </div>
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
