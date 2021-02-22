import { Col, Input, Row, Form, Button, Radio } from 'antd'
import React, { useState } from 'react'
import header_logo from './../../assets/img/coatofarms.png'
import './Statement.scss'

import ApplicatnsForm from './Forms/ApplicatnsForm'
import PersonalDataForm from './Forms/PersonalDataForm'
import ConsentForm from './Forms/ConsentForm'
import SuccessForm from './Forms/SuccessForm'


const Statement = () => {

    const [visibleModeFormOne, setVisibleModeFormOne] = useState({visible: true, submit: false})
    const [visibleModeFormTwo, setVisibleModeFormTwo] = useState({visible: false, submit: false})
    const [visibleModeFormThree, setVisibleModeFormThree] = useState({visible: false, submit: false})
    const [visibleModeFormSuccess, setVisibleModeFormSuccess] = useState(false)
        
    const onSubmitFormOne = (data) => {
        setVisibleModeFormOne({visible: false, submit: true})
        setVisibleModeFormTwo({visible: true, submit: false})
    }
    const onSubmitFormTwo = (data) => {
        setVisibleModeFormTwo({visible: false, submit: true})
        setVisibleModeFormThree({visible: true, submit: false})
    }
    const onSubmitFormThree = (data) => {
        setVisibleModeFormThree({visible: false, submit: true})
        setVisibleModeFormSuccess(true)
    }
    return (
        <div className="statemen">
            <StatementHeader />
            {visibleModeFormSuccess 
            ? <SuccessForm />
            : <div className="statemen_inner">
                <ApplicatnsForm title="Выбор заявителя"
                                number="1"
                                onSubmit={onSubmitFormOne}
                                visibleMode={visibleModeFormOne.visible}
                                submitMode={visibleModeFormOne.submit}
                                height={'350px'} />
                <PersonalDataForm title="Данные заявителя"
                                  number="2"
                                  onSubmit={onSubmitFormTwo}
                                  visibleMode={visibleModeFormTwo.visible}
                                  submitMode={visibleModeFormTwo.submit}
                                  height={'1050px'} />
                <ConsentForm title="Согласие"
                             number="3"
                             onSubmit={onSubmitFormThree}
                             visibleMode={visibleModeFormThree.visible}
                             submitMode={visibleModeFormThree.submit}
                             height={'880px'} />
            </div>
            }
        </div>
    )
}

const StatementHeader = () => {
    return (
        <div className="statemen_cap">
            <Row>
                <Col span={18}>
                    <div className="statemen_cap_inner">
                        <h1 className="statemen_cap_title">Выдача градостроительного плана земельного участка</h1>
                        <div className="statemen_cap_des">Градостроительный план земельного участка выдается 
                        в целях обеспечения субъектов градостроительной деятельности информацией, необходимой для 
                        архитектурно-строительного проектирования, строительства, реконструкции объектов 
                        капитального строительства в границах земельного участка.</div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="statemen_cap_wrapper">
                        <img className="statemen_logo" src={header_logo} />
                        <div className="statemen_name">Услугу предоставляет <br />Орган местного самоуправления</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}



export default Statement;