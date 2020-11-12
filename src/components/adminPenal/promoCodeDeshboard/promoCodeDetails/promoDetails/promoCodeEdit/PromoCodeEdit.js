import { Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import AdminHeader from "../../../../adminHeader/AdminHeader";
import SideBar from "../../../../sideBar/SideBar";

const PromoCodeEdit = () => {
  const { id } = useParams();
  const [defaultCode, setDefaultCode] = useState([]);
  const [updateCodeInfo, setUpdateCodeInfo] = useState({});

  const history = useHistory();

  const [updateDate, setUpdateDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDateStart = (date) => {
    const newDates = { ...updateDate };
    newDates.startDate = date;
    setUpdateDate(newDates);
  };

  const handleDateEnd = (date) => {
    const newDates = { ...updateDate };
    newDates.endDate = date;
    setUpdateDate(newDates);
  };

  const handleBlur = (e) => {
    const newInfo = { ...updateCodeInfo };
    newInfo[e.target.name] = e.target.value;
    setUpdateCodeInfo(newInfo);
  };

  useEffect(() => {
    fetch("https://enigmatic-badlands-36963.herokuapp.com/SeePromoCode")
      .then((res) => res.json())
      .then((data) => {
        const editPromo = data.find((item) => item._id.toString() === id);
        setDefaultCode(editPromo);
      });
  }, []);

  const handleUpdatePromoCode = () => {
    const updateInfo = { ...updateCodeInfo, ...updateDate, createDate: new Date() };
    fetch(`https://enigmatic-badlands-36963.herokuapp.com/updatePromo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ updateInfo }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          history.push("/promoCode");
        }
      });
  };

  return (
    <>
      <AdminHeader />
      <Container fluid>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <Card className="product-form">
              <form>
                <div className="form-group">
                  <label>Promo Code</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    defaultValue={defaultCode.promoCode}
                    className="form-control"
                    name="promoCode"
                    readonly="readonly"
                  />
                </div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="dd/MM/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Start Date"
                      //   disabled={isDisabled}
                      allowKeyboardControl={false}
                      readOnly={true}
                      autoFill={false}
                      value={defaultCode.startDate}
                      onChange={handleDateStart}
                      disable
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="End Date"
                      format="dd/MM/yyyy"
                      value={defaultCode.endDate}
                      onChange={handleDateEnd}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <div className="form-group">
                  <label>Discount Rate</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    defaultValue={defaultCode.discountRate}
                    className="form-control"
                    name="discountRate"
                  />
                </div>
                <div className="form-group">
                  <label>Use Time</label>
                  <input
                    defaultValue={defaultCode.useTime}
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="useTime"
                  />
                </div>
                <div className="form-group">
                  <label>Active</label>
                  <div className="float-right">
                    <Button onBlur={handleBlur} variant="secondary" name="active" value="Active">
                      Yes
                    </Button>
                    <Button onBlur={handleBlur} variant="danger" name="active" value="Deactive">
                      No
                    </Button>
                  </div>
                </div>
              </form>
              <div className="product-btn">
                <Button className="promo-btn" onClick={handleUpdatePromoCode} variant="warning">
                  Add
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PromoCodeEdit;
