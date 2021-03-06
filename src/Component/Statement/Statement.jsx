import { Col, Row } from "antd";
import React, { useReducer, useState } from "react";
import header_logo from "./../../assets/img/coatofarms.png";
import "./Statement.scss";

import ApplicatnsForm from "./Forms/ApplicatnsForm";
import PersonalDataForm from "./Forms/PersonalDataForm";
import ConsentForm from "./Forms/ConsentForm";
import SuccessForm from "./Forms/SuccessForm";
import {
  reducer,
  saveData,
  setSubmitMode,
  setVisibleMode,
} from "./StatementReducer";

const Statement = () => {
  const [stateFormOne, dispatchFormOne] = useReducer(reducer, {
    data: [],
    visible: true,
    submit: false,
  });
  const [stateFormTwo, dispatchFormTwo] = useReducer(reducer, {
    data: [],
    visible: false,
    submit: false,
  });
  const [stateFormThree, dispatchFormThree] = useReducer(reducer, {
    data: [],
    visible: false,
    submit: false,
  });

  const [visibleModeFormSuccess, setVisibleModeFormSuccess] = useState(false);

  const onSubmitFormOne = (data) => {
    dispatchFormOne(saveData(data));
    dispatchFormTwo(setVisibleMode(true));
  };
  const onSubmitFormTwo = (data) => {
    dispatchFormTwo(saveData(data));
    dispatchFormThree(setVisibleMode(true));
  };
  const onSubmitFormThree = (data) => {
    dispatchFormThree(saveData(data));
    setVisibleModeFormSuccess(true);
  };

  const onChangeOne = () => {
    if (stateFormOne.submit) {
      dispatchFormOne(setSubmitMode(false));
      dispatchFormOne(setVisibleMode(true));
    }
  };
  const onChangeTwo = () => {
    if (stateFormOne.submit) {
      dispatchFormTwo(setSubmitMode(false));
      dispatchFormTwo(setVisibleMode(true));
    }
  };
  const onChangeThree = () => {
    if (stateFormOne.submit) {
      dispatchFormThree(setSubmitMode(false));
      dispatchFormThree(setVisibleMode(true));
    }
  };
  return (
    <div className="statemen">
      <StatementHeader />
      {visibleModeFormSuccess ? (
        <SuccessForm />
      ) : (
        <div className="statemen_inner">
          <ApplicatnsForm
            title="Выбор заявителя"
            number="1"
            onSubmit={onSubmitFormOne}
            onChange={onChangeOne}
            visibleMode={stateFormOne.visible}
            submitMode={stateFormOne.submit}
            data={stateFormOne.data}
            height={"350px"}
          />
          <PersonalDataForm
            title="Данные заявителя"
            number="2"
            onSubmit={onSubmitFormTwo}
            onChange={onChangeTwo}
            visibleMode={stateFormTwo.visible}
            submitMode={stateFormTwo.submit}
            data={stateFormTwo.data}
            height={"1050px"}
          />
          <ConsentForm
            title="Согласие"
            number="3"
            onSubmit={onSubmitFormThree}
            onChange={onChangeThree}
            visibleMode={stateFormThree.visible}
            submitMode={stateFormThree.submit}
            data={stateFormThree.data}
            height={"860px"}
          />
        </div>
      )}
    </div>
  );
};

const StatementHeader = () => {
  return (
    <div className="statemen_cap">
      <Row>
        <Col span={18}>
          <div className="statemen_cap_inner">
            <h1 className="statemen_cap_title">
              Выдача градостроительного плана земельного участка
            </h1>
            <div className="statemen_cap_des">
              Градостроительный план земельного участка выдается в целях
              обеспечения субъектов градостроительной деятельности информацией,
              необходимой для архитектурно-строительного проектирования,
              строительства, реконструкции объектов капитального строительства в
              границах земельного участка.
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className="statemen_cap_wrapper">
            <img className="statemen_logo" src={header_logo} />
            <div className="statemen_name">
              Услугу предоставляет <br />
              Орган местного самоуправления
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Statement;
