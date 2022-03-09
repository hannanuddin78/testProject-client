import { Card } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import AdminHeader from "../../../../adminHeader/AdminHeader";
import SideBar from "../../../../sideBar/SideBar";

const ProductEdit = () => {
  let { pdId } = useParams();
  const [chosePd, setChosePd] = useState({});
  const [toggle, setToggle] = useState({ disabled: chosePd.active });
  const [updatePd, setUpdatePd] = useState({});
  const history = useHistory();

  const handleToggleBtn = (e) => {
    const id = e.target.id;
    setToggle({ disabled: id });
  };
  const handleBlur = (e) => {
    const newInfo = { ...updatePd };
    newInfo[e.target.name] = e.target.value;
    setUpdatePd(newInfo);
  };
  // useEffect(() => {
  //   setUpdatePd(newInfo);
  // })
  useEffect(() => {
    fetch("https://ancient-bayou-19368.herokuapp.com/allProducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const csPd = data.find((pd) => pd._id.toString() === pdId);
        setChosePd(csPd);
      });
  }, [pdId]);

  const handleUpdateProduct = () => {
    const updateInfo = { ...updatePd };
    fetch(`https://ancient-bayou-19368.herokuapp.com/updateProduct/${pdId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ updateInfo }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          history.push("/admin");
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
            <Button onClick={() => history.goBack()} variant="outline-secondary">
              Back
            </Button>
            <Card className="product-form">
              <form>
                <div className="form-group">
                  <label>Upload a image</label>
                  <input
                    disabled
                    type="file"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Picture"
                  />
                </div>
                <div className="form-group">
                  <label>Product Name</label>
                  <input
                    disabled
                    type="text"
                    defaultValue={chosePd.pdName}
                    className="form-control"
                    name="productName"
                  />
                </div>
                <div className="form-group">
                  <label>Product Price(Before Discount)</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    defaultValue={chosePd.pdPrice}
                    className="form-control"
                    name="pdPrice"
                  />
                </div>
                <div className="form-group">
                  <label>Discount Rate</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    defaultValue={chosePd.disPrice}
                    className="form-control"
                    name="disPrice"
                  />
                </div>
                <div className="form-group">
                  <label>Shipping Charge</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    defaultValue={chosePd.shpPrice}
                    className="form-control"
                    name="shpPrice"
                  />
                </div>
                <div className="form-group">
                  <label>Color</label>
                  <input
                    type="text"
                    onBlur={handleBlur}
                    defaultValue={chosePd.color}
                    className="form-control"
                    name="color"
                  />
                </div>
                <div className="form-group">
                  <label>Size</label>
                  <input
                    type="text"
                    onBlur={handleBlur}
                    defaultValue={chosePd.size}
                    className="form-control"
                    name="size"
                  />
                </div>
                <div className="form-group">
                  <label>Active</label>
                  <div onClick={handleToggleBtn} className="float-right" required>
                    <Button
                      onClick={handleBlur}
                      disabled={toggle.disabled === "Yes"}
                      id="Yes"
                      variant="secondary"
                      name="active"
                      value="Yes"
                    >
                      Yes
                    </Button>
                    <Button
                      onClick={handleBlur}
                      disabled={toggle.disabled === "No"}
                      id="No"
                      variant="danger"
                      name="active"
                      value="No"
                    >
                      No
                    </Button>
                  </div>
                </div>

                <div className="product-btn">
                  <Button className="promo-btn" onClick={handleUpdateProduct} variant="warning">
                    Add
                  </Button>
                </div>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductEdit;
