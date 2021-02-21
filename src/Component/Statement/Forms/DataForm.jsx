import React, { useEffect, useState } from 'react'
import {CheckOutlined} from '@ant-design/icons'


const Number = (props) => {
    return (
        <div className="number">{props.number}</div>
    )
}

const Check = () => {

    const styleCheck = {
        fontSize: '30px',
        color: '#fff'
    }

    return (
        <div className="check"><CheckOutlined style={styleCheck} /></div>
    )
}

const dataForm = (Component) => (props) => {
    
    const [checkMode, setCheckMode] = useState(!props.visibleMode);

    useEffect(()=>{
        setCheckMode(!props.visibleMode)
    }, [!props.visibleMode])

    return (
        <div className="dataform" style={checkMode ? { height: '80px'} : {}}>
            <div className="dataform_icon">
                {checkMode ? <Check /> : <Number number={props.number} />}
            </div>
            <div className="dataform_inner">
                <h4 className="dataform_title">{props.title}</h4>
                {!checkMode ? <Component {...props} /> : null}
            </div>
        </div>
    )
        
}
    


export default dataForm;