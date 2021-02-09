import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import AdminHeader from "../../adminHeader/AdminHeader";
import SideBar from "../../sideBar/SideBar";

const AddNewProduct = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [toggle, setToggle] = useState({ disabled: "No" });
  const [selectedFile, setSelectedFile] = useState();
  const history = useHistory();

  const handleFileInputChange = (e) => {
    const fileImg = e.target.files[0];
    setSelectedFile(fileImg);
    setFile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("https://e-com-project-test-server.herokuapp.com/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          sessionStorage.setItem("upImgLink", result.url);
        });
      setFile("");
      handleAllDataSubmit();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAllDataSubmit = () => {
    const img = sessionStorage.getItem("upImgLink");
    const totalData = { ...info, image: img };
    fetch("https://e-com-project-test-server.herokuapp.com/addProducts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(totalData),
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.removeItem("upImgLink");
        history.push("/admin");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleToggle = (e) => {
    const id = e.target.id;
    setToggle({ disabled: id });
  };

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
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
                    id="fileInput"
                    type="file"
                    name="image"
                    onChange={handleFileInputChange}
                    value={file}
                  />
                </div>
                <div className="form-group">
                  <label>Product Name</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="pdName" />
                </div>
                <div className="form-group">
                  <label>Product Price(Before Discount)</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="pdPrice" />
                </div>
                <div className="form-group">
                  <label>Discount Rate</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="disPrice" />
                </div>
                <div className="form-group">
                  <label>Shipping Charge</label>
                  <input onBlur={handleBlur} type="text" className="form-control" name="shpPrice" />
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
                  <div onClick={handleToggle} className="float-right" required>
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
                  <Button className="promo-btn" type="submit" variant="warning">
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

export default AddNewProduct;
