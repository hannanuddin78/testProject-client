import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import { useHistory } from "react-router-dom";

const AddPromoCodeForm = () => {
  const [promoCodeInfo, setPromoCodeInfo] = useState({});
  console.log(promoCodeInfo);
  const history = useHistory();

  const [selectedDate, setSelectedDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDateStart = (date) => {
    const newDates = { ...selectedDate };
    newDates.startDate = date;
    setSelectedDate(newDates);
  };

  const handleDateEnd = (date) => {
    const newDates = { ...selectedDate };
    newDates.endDate = date;
    setSelectedDate(newDates);
  };

  const handleBlur = (e) => {
    let code = document.getElementById("promoCode").value.toUpperCase();
    const newInfo = { ...promoCodeInfo, promoCode: code };
    newInfo[e.target.name] = e.target.value;
    setPromoCodeInfo(newInfo);
  };

  const handleAddPromoCode = () => {
    const CodeInfo = { ...promoCodeInfo, ...selectedDate, createDate: new Date() };
    fetch("https://enigmatic-badlands-36963.herokuapp.com/addPromoCode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(CodeInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        history.push("/promoCode");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Card className="product-form">
        <form>
          <div className="form-group">
            <label>Promo Code</label>
            <input type="text" id="promoCode" className="form-control text-uppercase" />
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
                value={selectedDate.startDate}
                onChange={handleDateStart}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="End Date"
                format="dd/MM/yyyy"
                value={selectedDate.endDate}
                onChange={handleDateEnd}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <div className="form-group">
            <label>Discount Rate</label>
            <input onBlur={handleBlur} type="text" className="form-control" name="discountRate" />
          </div>
          <div className="form-group">
            <label>Use Time</label>
            <input onBlur={handleBlur} type="text" className="form-control" name="useTime" />
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
          <Button className="promo-btn" onClick={handleAddPromoCode} variant="warning">
            Add
          </Button>
        </div>
      </Card>
    </>
  );
};

export default AddPromoCodeForm;
