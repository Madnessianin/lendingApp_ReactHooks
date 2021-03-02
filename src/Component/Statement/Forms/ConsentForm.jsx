import { Form, Button, List, Checkbox } from "antd";
import React, { useState } from "react";
import dataForm from "./DataForm";
import icon from "./../../../assets/img/icon.png";
import { styleLargeBtn, styleDisabledLargeBtn } from "../../../StyleForAntd";

const ConsentForm = dataForm((props) => {
  const [checkedOne, setChekedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const onChangeOne = (e) => {
    setChekedOne(e.target.checked);
  };
  const onChangeTwo = (e) => {
    setCheckedTwo(e.target.checked);
  };

  return (
    <div className="consent">
      <MyList />
      <Form onFinish={props.onSubmit} name="consent">
        <Form.Item name="consent">
          <Checkbox.Group>
            <div className="consent_item">
              <Checkbox value={"confirmation"} onChange={onChangeOne}>
                <span className="consent_item_text">
                  Я подтверждаю свое согласие со всеми вышеперечисленными
                  пунктами
                </span>
              </Checkbox>
            </div>
            <div className="consent_item consent_item--second">
              <Checkbox value={"notification"} onChange={onChangeTwo}>
                <span className="consent_item_text">
                  Я уведомлен о том, что результат будет получен в электронном
                  виде
                </span>
              </Checkbox>
            </div>
          </Checkbox.Group>
        </Form.Item>
        <div className="consent_wrapper">
          <div className="consent_warning">
            <img className="consent_warning_icon" src={icon} />
            <span className="consent_item_text">
              Пожалуйста, еще раз внимательно проверьте все данные перед
              отправкой
            </span>
          </div>

          <Form.Item>
            {checkedOne && checkedTwo ? (
              <Button style={styleLargeBtn} type="primary" htmlType="submit">
                Продолжить
              </Button>
            ) : (
              <Button style={styleDisabledLargeBtn} type="primary" disabled>
                Продолжить
              </Button>
            )}
          </Form.Item>
          <div className="consent_footer">
            Нажимая кнопку «Отправить», вы соглашаетесь с
            <a href="#">правилами хранения и обработки персональных данных</a>
          </div>
        </div>
      </Form>
    </div>
  );
});

const MyList = () => {
  const data = [
    {
      description:
        "Я подтверждаю, что вся представленная информация является достоверной и точной;",
    },
    {
      description:
        "Я несу ответственность в соответствии с действующим законодательством Российской Федерации за предоставление заведомо ложных или неполных сведений;",
    },
    {
      description:
        "Я выражаю свое согласие на необходимое использование и обработку своих персональных данных, в том числе в информационных системах;",
    },
    { description: "Со сроками оказания государственной услуги ознакомлен." },
  ];

  return (
    <div className="consent_des">
      <div className="consent_des_title">
        Требуется ваше согласие по следующим пунктам:
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              description={
                <div className="consent_des_item">
                  <div className="point" />
                  <span className="consent_des_text">{item.description}</span>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ConsentForm;
