import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AdminHeader from "../../adminHeader/AdminHeader";
import SideBar from "../../sideBar/SideBar";

const AddNewProduct = () => {
  const [info, setInfo] = useState({});
  console.log(info);
  const [file, setFile] = useState(null);

  const history = useHistory();

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("pdName", info.productName);
    formData.append("pdPrice", info.ProductPrice);
    formData.append("disPrice", info.DiscountRate);
    formData.append("shpPrice", info.shippingCharge);
    formData.append("color", info.color);
    formData.append("size", info.size);
    formData.append("active", info.active);

    fetch("http://localhost:5000/addProducts", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("You Add Product SuccessFully");
        history.push("/admin");
      })
      .catch((error) => {
        console.error(error);
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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Upload a image</label>
                  <input
                    onChange={handleFileChange}
                    type="file"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Picture"
                  />
                </div>
                <div className="form-group">
                  <label>Product Name</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="productName"
                  />
                </div>
                <div className="form-group">
                  <label>Product Price(Before Discount)</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="ProductPrice"
                  />
                </div>
                <div className="form-group">
                  <label>Discount Rate</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="DiscountRate"
                  />
                </div>
                <div className="form-group">
                  <label>Shipping Charge</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    className="form-control"
                    name="shippingCharge"
                  />
                </div>
                <div className="form-group">
                  <label>Color</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="color" />
                </div>
                <div className="form-group">
                  <label>Size</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="size" />
                </div>
                <div className="form-group">
                  <label>Active</label>
                  <div className="float-right">
                    <Button onBlur={handleBlur} variant="secondary" name="active" value="Yes">
                      Yes
                    </Button>
                    <Button onBlur={handleBlur} variant="danger" name="active" value="No">
                      No
                    </Button>
                  </div>
                </div>

                <div className="product-btn">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddNewProduct;
