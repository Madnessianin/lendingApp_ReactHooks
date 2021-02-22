import { Form, Button, Radio } from 'antd'
import React, { useState } from 'react'
import dataForm from './DataForm'

const ApplicatnsForm = dataForm((props) => {

    const [value, setValue] = useState(1)

    const onChange = (event) =>{
        setValue(event.target.value)
    }

    const radioStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '560px',
        height: '80px',
        lineHeight: '24px'
    };

    const styleBtn = {
        width: '100%',
        height: '48px',
        fontSize: '18px',
        textAline: 'center',
        position: 'relative',
        top: '-25px',
        left: '0'
    }

    return (
        <div className="apl">
            <Form onFinish={props.onSubmit} name="applicatns">
                <Form.Item>
                    <Radio.Group onChange={onChange} size="large" value={value}>
                        <div className="apl_item">
                            <Radio style={radioStyle} value={1}>
                                <div className="apl_des"><strong>Константинопольский К.К.</strong><br /> Физическое лицо</div>
                            </Radio>
                        </div>
                        <div className="apl_item apl_item--last">
                            <Radio style={radioStyle} value={2}>
                                <div className="apl_des"><strong>Константинопольский К.К.</strong><br /> Юридическое лицо</div>
                            </Radio>
                        </div> 
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button style={styleBtn} type="primary" htmlType="submit">Продолжить</Button>
                </Form.Item>
            </Form>
        </div>
        
    )
})


export default ApplicatnsForm;