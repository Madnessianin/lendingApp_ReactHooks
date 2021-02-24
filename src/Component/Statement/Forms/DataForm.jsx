import React from 'react'
import {CheckOutlined} from '@ant-design/icons'
import { styleCheck } from '../../../StyleForAntd';

const dataForm = (Component) => (props) => {
   
    return (
        <div className="dataform" style={props.visibleMode ? {height: `${props.height}`} : { height: '80px'} }>
            <div className="dataform_icon">
                <div className={`number ${props.visibleMode || props.submitMode ? "number--active" : ""}`}>{props.number}</div>
                <div className={`check ${props.submitMode ? 'check--active' : ''}`}><CheckOutlined style={styleCheck} /></div>      
            </div>
            <div className="dataform_inner">
                <h4 className={`dataform_title ${props.visibleMode || props.submitMode ? "dataform_title--active" : ""}`}>{props.title}</h4>
                {props.visibleMode ? <Component {...props} /> : null}
            </div>
        </div>
    )
        
}





export default dataForm;