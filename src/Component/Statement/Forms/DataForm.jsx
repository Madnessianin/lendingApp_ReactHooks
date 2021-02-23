import React, { useEffect, useState } from 'react'
import {CheckOutlined} from '@ant-design/icons'
import { styleCheck } from '../../../StyleForAntd';

const dataForm = (Component) => (props) => {

    
    const [visibleMode, setVisibleMode] = useState(props.visibleMode);
    
    useEffect(()=>{
        setVisibleMode(props.visibleMode)
    }, [props.visibleMode])

    const [isSubmit, setIsSubmit] = useState(props.submitMode)
    
    useEffect(()=>{
        setIsSubmit(props.submitMode)
    }, [props.submitMode])
    
    return (
        <div className="dataform" style={visibleMode ? {height: `${props.height}`} : { height: '80px'} }>
            <div className="dataform_icon">
                <div className={`number ${visibleMode || isSubmit ? "number--active" : ""}`}>{props.number}</div>
                <div className={`check ${isSubmit ? 'check--active' : ''}`}><CheckOutlined style={styleCheck} /></div>      
            </div>
            <div className="dataform_inner">
                <h4 className={`dataform_title ${visibleMode || isSubmit ? "dataform_title--active" : ""}`}>{props.title}</h4>
                {visibleMode ? <Component {...props} /> : null}
            </div>
        </div>
    )
        
}





export default dataForm;