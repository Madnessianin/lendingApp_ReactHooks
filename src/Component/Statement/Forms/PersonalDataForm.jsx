import { Form, Button,  Input, Divider,  InputNumber, Row, Col } from 'antd'
import React from 'react'
import dataForm from './DataForm'




const PersonalDataForm = dataForm((props) => {
    
    const styleBtn = {
        width: '100%',
        height: '48px',
        fontSize: '18px',
        textAline: 'center'
    }

    const styleInput = {
        height: '48px',
        width: '100%'
    }
    const layout = {
        labelCol: {
            span: 24,
        },
        wrapperCol: {
            span: 24,
        },
    };
    
    return (
        <div className="personal">
            <Form {...layout} onFinish={props.onSubmit} name="personal_data">
                <div className="personal_item personal_item--first">
                    <Form.Item style={{fontSize: '18px'}} name="surname"
                            label="Фамилия"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, введите фамилию!',
                                }, ]}>
                        <div className="personal_input">
                            <Input style={styleInput}  />
                        </div>
                    </Form.Item>
                </div>
                <div className="personal_item personal_item--second">
                    <Form.Item name="name"
                            label="Имя"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, введите имя!',
                                }, ]}>
                        <div className="personal_input">
                            <Input style={styleInput} />
                        </div>
                    </Form.Item>
                </div>
                <div className="personal_item personal_item--third">
                    <Form.Item name="patronymic"
                            label="Отчество"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, введите отчество!',
                                }, ]}>
                        <div className="personal_input">
                            <Input style={styleInput} />
                        </div>
                    </Form.Item>
                </div>
                <div className="personal_item personal_item--four">
                    <Form.Item name="email"
                            label="Электронная почта"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, укажите свою почту!',
                                }, ]}>
                        <div className="personal_input">
                            <Input style={styleInput} />
                        </div>
                    </Form.Item>
                </div>
                <div className="personal_item personal_item--five">
                    <Form.Item name="phone"
                            label="Телефон"
                            rules={[
                                {
                                    required: true,
                                    message: 'Пожалуйста, укажите свой телефон!',
                                }, ]}>
                        <div className="personal_input">
                            <Input style={styleInput} />
                        </div>
                    </Form.Item>
                </div>

                <div className="personal_passport">
                    <div className="personal_passport_item personal_passport_item--first">
                        <Divider orientation="left">Документ, удостоверяющий личность</Divider>
                    </div>
                    <div className="personal_passport_item personal_passport_item--second">
                        <Form.Item name="document"
                                label="Документ"
                                initialValue={"Паспорт"}>
                            <Input style={styleInput} disabled />
                        </Form.Item>
                    </div>
                    <div className="personal_passport_item personal_passport_item--third">
                        <Row>
                            <Col span={11}>
                                <Form.Item name="series"
                                            label="Серия"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Пожалуйста, укажите серию паспорта!',
                                            }, ]}>
                                    <Input style={styleInput} />
                                </Form.Item>
                            </Col>
                            <div className="personal_pasport_divider">
                                <Divider type="vertical" />
                            </div>
                            <Col span={12}>
                                <Form.Item name="number"
                                            label="Номер"
                                            rules={[
                                            {
                                                required: true,
                                                message: 'Пожалуйста, укажите номер паспорта!',
                                            }, ]}>
                                    <Input style={styleInput} />
                                </Form.Item>
                            </Col> 
                        </Row>
                    </div>
                    <div className="personal_passport_item personal_passport_item--four">
                        <Divider orientation="left" plain>Дата выдачи</Divider>
                    </div>
                    <div className="personal_passport_item personal_passport_item--five">
                        <Row>
                            <Col span={7}>
                                <Form.Item name="day"
                                        label="День">
                                    <InputNumber style={styleInput} size="large" min={1} max={31} defaultValue={3} />
                                </Form.Item>  
                            </Col>
                            <div className="personal_pasport_divider">
                                <Divider type="vertical" />
                            </div>
                            <Col span={7}>
                                <Form.Item name="mounth"
                                        label="Месяц">
                                    <InputNumber style={styleInput} min={1} max={12} defaultValue={5} />
                                </Form.Item> 
                            </Col>
                            <div className="personal_pasport_divider">
                                <Divider type="vertical" />
                            </div>
                            <Col span={8}>
                                <Form.Item name="year"
                                        label="Год">
                                    <InputNumber style={styleInput} min={1991} max={2020} defaultValue={2018} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </div> 
                </div>

                <div className="personal_btn">
                    <Form.Item>
                        <Button style={styleBtn} type="primary" htmlType="submit">Продолжить</Button>
                    </Form.Item>
                </div>              
                    
                
            </Form>
        </div>  
    )
})


export default PersonalDataForm;