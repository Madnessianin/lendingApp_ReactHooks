import { Col, Input, Row, Form, Button, Radio } from 'antd'
import React, { useState } from 'react'
import header_logo from './../../assets/img/coatofarms.png'
import './Statement.scss'

import ApplicatnsForm from './Forms/ApplicatnsForm'
import PersonalDataForm from './Forms/PersonalDataForm'
import ConsentForm from './Forms/ConsentForm'


const Statement = () => {

    const [visibleModeFormOne, setVisibleModeFormOne] = useState(true)
    const [visibleModeFormTwo, setVisibleModeFormTwo] = useState(false)
    const [visibleModeFormThree, setVisibleModeFormThree] = useState(false)

    const onSubmitFormOne = (data) => {
        setVisibleModeFormOne(false)
        setVisibleModeFormTwo(true)
    }
    const onSubmitFormTwo = (data) => {
        setVisibleModeFormTwo(false)
        setVisibleModeFormThree(true)
    }
    const onSubmitFormThree = (data) => {
        setVisibleModeFormThree(false)
    }

    return (
        <div className="statemen">
            <StatementHeader />
            <div className="statemen_inner">
                <ApplicatnsForm title="Выбор заявителя"
                                number="1"
                                onSubmit={onSubmitFormOne}
                                visibleMode={visibleModeFormOne}
                                height={'350px'} />
                <PersonalDataForm title="Данные заявителя"
                                  number="2"
                                  onSubmit={onSubmitFormTwo}
                                  visibleMode={visibleModeFormTwo}
                                  height={'1050px'} />
                <ConsentForm title="Согласие"
                             number="3"
                             onSubmit={onSubmitFormThree}
                             visibleMode={visibleModeFormThree}
                             height={'880px'} />
            </div>
            
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