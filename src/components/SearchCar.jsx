import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import {Container, Button, Row, Col} from "react-bootstrap";

import HeaderCar from "../public/img/HeaderCar.png";



const FormSearchComponent = () => {
    return (
        <>
            <div className="bg-aliceblue">
                <Container className="pt-4">
                    <Row>
                        <Col lg className="my-auto">
                            <h1 className="h1 fw-bold md-4" style={{marginBottom:"20px"}}>Sewa & Rental Mobil Terbaik di kawasan Bandar Lampung</h1>
                            <p className="navbar-nav w-80">
                                Selamat datang di Binar Rental Car. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                            </p>
                        </Col>
                        <Col lg>
                            <img src={HeaderCar} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <div className="cars-box-search mt- p-3 row row-cols-xl-auto mx-auto mb-4" style={{marginTop:"-40px"}}>
                    <div className="col-xxl p-2 mx-auto inputDriver">
                        <label htmlFor="TipeDriver" className="pb-2" style={{fontSize: "14px"}}>
                            Tipe Driver
                        </label>
                        <select className="form-select" id="driver" required>
                            <option value="">Pilih Driver</option>
                            <option value="yes">Dengan Supir</option>
                            <option value="no">Tanpa Supir(Lepas Kunci)</option>
                        </select>
                    </div>
                    <div className="col-xxl p-2 mx-auto inputDate">
                        <label htmlFor="Tanggal" className="pb-2" style={{fontSize: "14px"}}>
                            Tanggal
                        </label>
                        <input type="date" id="date" className="form-control" required />
                    </div>
                    <div className="col-xxl p-2 mx-auto inputTime">
                        <label htmlFor="Time" className="pb-2" style={{fontSize: "14px"}}>
                            Waktu Jemput/Ambil
                        </label>
                        <input type="time" id="time" className="form-control" required/>
                    </div>
                    <div className="col-xxl p-2 mx-auto inputPassanger" style={{minWidth: "200px"}}>
                        <label htmlFor="Tanggal" className="pb-2" style={{fontSize: "13.5px"}}>
                            Jumlah Penumpang (optional)
                        </label>
                        <input type="number" id="passanger" className="form-control icon-rtl-passanger" placeholder="Jumlah Penumpang" required />
                    </div>
                    <div className="col-xl p-2" style={{display: "inline", alignSelf: "flex-end", height: "100%"}}>
                        <button className="btn bg-button text-white" type="button" id="btnFilterCar">
                            Cari Mobil
                        </button>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default FormSearchComponent;
