import { Form, Button, Input, Divider, InputNumber, Row, Col } from "antd";
import React, { useState } from "react";
import { styleInput, styleLargeBtn } from "../../../StyleForAntd";
import dataForm from "./DataForm";

const PersonalDataForm = dataForm((props) => {
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  const [valueDay, setValueDay] = useState(3);
  const [valueMounth, setValueMounth] = useState(5);
  const [valueYear, setVAlueYear] = useState(2018);

  return (
    <div className="personal">
      <Form {...layout} onFinish={props.onSubmit} name="personal_data">
        <div className="personal_item personal_item--first">
          <Form.Item
            style={{ fontSize: "18px" }}
            name="surname"
            label="Фамилия"
            initialValue={props.data.surname}
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите фамилию!",
              },
            ]}
          >
            <Input style={styleInput} />
          </Form.Item>
        </div>
        <div className="personal_item personal_item--second">
          <Form.Item
            name="name"
            label="Имя"
            initialValue={props.data.name}
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите имя!",
              },
            ]}
          >
            <Input style={styleInput} />
          </Form.Item>
        </div>
        <div className="personal_item personal_item--third">
          <Form.Item
            name="patronymic"
            label="Отчество"
            initialValue={props.data.patronymic}
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите отчество!",
              },
            ]}
          >
            <Input style={styleInput} />
          </Form.Item>
        </div>
        <div className="personal_item personal_item--four">
          <Form.Item
            name="email"
            label="Электронная почта"
            initialValue={props.data.email}
            rules={[
              {
                required: true,
                message: "Пожалуйста, укажите свою почту!",
              },
            ]}
          >
            <Input style={styleInput} />
          </Form.Item>
        </div>
        <div className="personal_item personal_item--five">
          <Form.Item
            name="phone"
            label="Телефон"
            initialValue={props.data.phone}
            rules={[
              {
                required: true,
                message: "Пожалуйста, укажите свой телефон!",
              },
            ]}
          >
            <Input style={styleInput} />
          </Form.Item>
        </div>

        <div className="personal_passport">
          <div className="personal_passport_item personal_passport_item--first">
            <Divider orientation="left">
              Документ, удостоверяющий личность
            </Divider>
          </div>
          <div className="personal_passport_item personal_passport_item--second">
            <Form.Item
              name="document"
              label="Документ"
              initialValue={"Паспорт"}
            >
              <Input style={styleInput} disabled />
            </Form.Item>
          </div>
          <div className="personal_passport_item personal_passport_item--third">
            <Row>
              <Col span={11}>
                <Form.Item
                  name="series"
                  label="Серия"
                  initialValue={props.data.series}
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, укажите серию паспорта!",
                    },
                  ]}
                >
                  <Input style={styleInput} />
                </Form.Item>
              </Col>
              <div className="personal_pasport_divider">
                <Divider type="vertical" />
              </div>
              <Col span={12}>
                <Form.Item
                  name="number"
                  label="Номер"
                  initialValue={props.data.number}
                  rules={[
                    {
                      required: true,
                      message: "Пожалуйста, укажите номер паспорта!",
                    },
                  ]}
                >
                  <Input style={styleInput} />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <div className="personal_passport_item personal_passport_item--four">
            <Divider orientation="left" plain>
              Дата выдачи
            </Divider>
          </div>
          <div className="personal_passport_item personal_passport_item--five">
            <Row>
              <Col span={7}>
                <Form.Item
                  name="day"
                  label="День"
                  initialValue={props.data.day || valueDay}
                >
                  <InputNumber
                    style={styleInput}
                    size="large"
                    min={1}
                    max={31}
                    value={valueDay}
                    onChange={(value) => {
                      setValueDay(value);
                    }}
                  />
                </Form.Item>
              </Col>
              <div className="personal_pasport_divider">
                <Divider type="vertical" />
              </div>
              <Col span={7}>
                <Form.Item
                  name="mounth"
                  label="Месяц"
                  initialValue={props.data.mounth || valueMounth}
                >
                  <InputNumber
                    style={styleInput}
                    min={1}
                    max={12}
                    value={valueMounth}
                    onChange={(value) => {
                      setValueMounth(value);
                    }}
                  />
                </Form.Item>
              </Col>
              <div className="personal_pasport_divider">
                <Divider type="vertical" />
              </div>
              <Col span={8}>
                <Form.Item
                  name="year"
                  label="Год"
                  initialValue={props.data.year || valueYear}
                >
                  <InputNumber
                    style={styleInput}
                    min={1991}
                    max={2020}
                    value={valueYear}
                    onChange={(value) => {
                      setVAlueYear(value);
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </div>

        <div className="personal_btn">
          <Form.Item>
            <Button style={styleLargeBtn} type="primary" htmlType="submit">
              Продолжить
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
});

export default PersonalDataForm;
