import { Form, Button, Radio, Divider } from 'antd'
import React, { useState } from 'react'
import { Check } from './DataForm'
import {CheckOutlined} from '@ant-design/icons'


export const SuccessForm = (props) => {
    
    const styleBtn = {
        minWidth: '230px',
        height: '48px',
        fontSize: '18px',
        textAline: 'center'
    }

    const styleCheck = {
        fontSize: '30px',
        color: '#fff'
    }

    return (
        <div className="success">
            <div className="success_icon">
                <div className="check check--success"><CheckOutlined style={styleCheck} /></div> 
            </div>
            <div className="success_inner">
                <h4 className='success_title'>Заявление принято</h4>
                <p className="success_text">Номер заявления RU-1234567. 
                Максимальный срок предоставления услуги — 20 рабочих дней. 
                Следите за статусом заявления в <a href="#">Личном кабинете</a>.
                <br /><br /> 
                Если у вас остались вопросы по оказанию услуги, пожалуйста, 
                обращайтесь по телефону +7 (342) 123-45-67.
                </p>
                <div className="success_btn">
                    <Button style={styleBtn} type="primary">Вернуться в каталог</Button>
                    <Button style={styleBtn} >Перейти в личный кабинет</Button>
                </div>
            </div>
        </div>
        
    )
}


export default SuccessForm;