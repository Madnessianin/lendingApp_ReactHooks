import { Form, Button, List, Checkbox } from 'antd'
import React, { useState } from 'react'
import dataForm from './DataForm'
import icon from './../../../assets/img/icon.png'
import { styleBtnTwo } from '../../../StyleForAntd'

const ConsentForm = dataForm((props) => {

    const [checkedOne, setChekedOne] = useState(false)
    const [checkedTwo, setCheckedTwo] = useState(false)

    const onChangeOne = () =>{
        setChekedOne(!checkedOne)
    }
    const onChangeTwo = () =>{
        setCheckedTwo(!checkedTwo)
    }   
       
    return (
        <div className="consent">
            <MyList />         
            <Form onFinish={props.onSubmit} name="consent">
                <div className="consent_item">
                    <Form.Item name="confirmation">
                        <Checkbox onChange={onChangeOne} 
                                  checked={checkedOne}>
                            <span className="consent_item_text">Я подтверждаю свое согласие со всеми вышеперечисленными пунктами</span>
                        </Checkbox>
                    </Form.Item>
                </div>
                <div className="consent_item">
                    <Form.Item name="notification">
                        <Checkbox onChange={onChangeTwo} 
                                  checked={checkedTwo}>
                            <span className="consent_item_text">Я уведомлен о том, что результат будет получен в электронном виде</span>
                        </Checkbox>
                    </Form.Item>
                </div>
                <div className="consent_warning">
                    <img className="consent_warning_icon" src={icon} />
                    <span className="consent_item_text">Пожалуйста, еще раз внимательно проверьте все данные перед отправкой</span>
                </div>
                              
                <Form.Item>
                    {checkedOne && checkedTwo 
                    ? <Button style={styleBtnTwo} 
                              type="primary" 
                              htmlType="submit">Продолжить</Button>
                    : <Button style={styleBtnTwo} 
                              type="primary" 
                              htmlType="submit" 
                              disabled>Продолжить</Button>}
                </Form.Item>
                <div className="consent_footer">Нажимая кнопку «Отправить», вы соглашаетесь с 
                <a href="#">правилами хранения и обработки персональных данных</a>
                </div>
            </Form>
        </div>
        
    )
})


const MyList = () => {

    const data = [
        {description: 'Я подтверждаю, что вся представленная информация является достоверной и точной;'},
        {description: 'Я несу ответственность в соответствии с действующим законодательством Российской Федерации за предоставление заведомо ложных или неполных сведений;'},
        {description: 'Я выражаю свое согласие на необходимое использование и обработку своих персональных данных, в том числе в информационных системах;'},
        {description: 'Со сроками оказания государственной услуги ознакомлен.'}
    ]
    
    return (
        <div className="consent_des">
            <div className="consent_des_title">Требуется ваше согласие по следующим пунктам:</div>
            <List itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            description={
                                <div className="consent_des_item">
                                    <div className="point" />
                                    <span className="consent_des_text">{item.description}</span>
                                </div>    
                            } />
                    </List.Item>
                )} /> 
         </div>
    )
}


export default ConsentForm;