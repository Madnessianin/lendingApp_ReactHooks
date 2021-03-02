import { Form, Button, Radio } from "antd";
import React, { useState } from "react";
import { radioStyle, styleLargeShiftBtn } from "../../../StyleForAntd";
import dataForm from "./DataForm";

const ApplicatnsForm = dataForm((props) => {
  const [value, setValue] = useState("individual");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="apl">
      <Form onFinish={props.onSubmit} name="applicatns">
        <Form.Item name="person" initialValue={props.data.person || value}>
          <Radio.Group onChange={onChange} size="large" value={value}>
            <div className="apl_item">
              <Radio style={radioStyle} value={"individual"}>
                <div className="apl_des">
                  <strong>Константинопольский К.К.</strong>
                  <br /> Физическое лицо
                </div>
              </Radio>
            </div>
            <div className="apl_item apl_item--last">
              <Radio style={radioStyle} value={"entity"}>
                <div className="apl_des">
                  <strong>Константинопольский К.К.</strong>
                  <br /> Юридическое лицо
                </div>
              </Radio>
            </div>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button style={styleLargeShiftBtn} type="primary" htmlType="submit">
            Продолжить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});

export default ApplicatnsForm;
