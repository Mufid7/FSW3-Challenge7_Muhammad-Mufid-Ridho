import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";
import {Container} from "react-bootstrap";
import ImageCar from "../public/images/car01.min.jpg";

const CardCarComponent = () => {
    return (
        <Container>
            <div className="row row-cols-auto justify-content-center">
                <div className="col m-2 ">
                    <div className="card" style={{width: "18rem", height: "550px"}}>
                        <img src={ImageCar} className="card-img-top img-fluid" alt="" style={{height: "190px", objectFit: "cover"}} />
                        <div className="card-body" style={{fontSize: "14px"}}>
                            <p className="card-title">Toyota Avanza</p>
                            <p className="fw-bold">Rp. 500.000 / hari</p>
                            <p className="card-text" style={{height: "90px"}}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias beatae natus alias, porro nisi quisquam, quidem, quisquam doloremque.
                            </p>
                            <div className="my-2">
                                <i className="bi bi-people me-2"></i>5 Orang
                            </div>
                            <div className="my-2">
                                <i className="bi bi-gear me-2"></i>Manual
                            </div>
                            <div className="my-2">
                                <i className="bi bi-calendar4 me-2"></i>24 Mei 2022
                            </div>
                            <a href="/cars" className="btn bg-button text-white w-100 mt-2 fw-bold mt-4" style={{fontSize: "14px"}}>
                                Pilih Mobil
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col m-2">
                    <div className="card" style={{width: "18rem", height: "550px"}}>
                        <img src={ImageCar} className="card-img-top img-fluid" alt="" style={{height: "190px", objectFit: "cover"}} />
                        <div className="card-body" style={{fontSize: "14px"}}>
                            <p className="card-title">Toyota Avanza</p>
                            <p className="fw-bold">Rp. 500.000 / hari</p>
                            <p className="card-text" style={{height: "90px"}}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias beatae natus alias, porro nisi quisquam, quidem, quisquam doloremque.
                            </p>
                            <div className="my-2">
                                <i className="bi bi-people me-2"></i>5 Orang
                            </div>
                            <div className="my-2">
                                <i className="bi bi-gear me-2"></i>Manual
                            </div>
                            <div className="my-2">
                                <i className="bi bi-calendar4 me-2"></i>24 Mei 2022
                            </div>
                            <a href="/cars" className="btn bg-button text-white w-100 mt-2 fw-bold mt-4" style={{fontSize: "14px"}}>
                                Pilih Mobil
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col m-2">
                    <div className="card" style={{width: "18rem", height: "550px"}}>
                        <img src={ImageCar} className="card-img-top img-fluid" alt="" style={{height: "190px", objectFit: "cover"}} />
                        <div className="card-body" style={{fontSize: "14px"}}>
                            <p className="card-title">Toyota Avanza</p>
                            <p className="fw-bold">Rp. 500.000 / hari</p>
                            <p className="card-text" style={{height: "90px"}}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias beatae natus alias, porro nisi quisquam, quidem, quisquam doloremque.
                            </p>
                            <div className="my-2">
                                <i className="bi bi-people me-2"></i>5 Orang
                            </div>
                            <div className="my-2">
                                <i className="bi bi-gear me-2"></i>Manual
                            </div>
                            <div className="my-2">
                                <i className="bi bi-calendar4 me-2"></i>24 Mei 2022
                            </div>
                            <a href="/cars" className="btn bg-button text-white w-100 mt-2 fw-bold mt-4" style={{fontSize: "14px"}}>
                                Pilih Mobil
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col m-2">
                    <div className="card" style={{width: "18rem", height: "550px"}}>
                        <img src={ImageCar} className="card-img-top img-fluid" alt="" style={{height: "190px", objectFit: "cover"}} />
                        <div className="card-body" style={{fontSize: "14px"}}>
                            <p className="card-title">Toyota Avanza</p>
                            <p className="fw-bold">Rp. 500.000 / hari</p>
                            <p className="card-text" style={{height: "90px"}}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias beatae natus alias, porro nisi quisquam, quidem, quisquam doloremque.
                            </p>
                            <div className="my-2">5 Orang</div>
                            <div className="my-2">Manual</div>
                            <div className="my-2">24 Mei 2022</div>
                            <a href="/cars" className="btn bg-button text-white w-100 mt-2 fw-bold mt-4" style={{fontSize: "14px"}}>
                                Pilih Mobil
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col m-2">
                    <div className="card" style={{width: "18rem", height: "550px"}}>
                        <img src={ImageCar} className="card-img-top img-fluid" alt="" style={{height: "190px", objectFit: "cover"}} />
                        <div className="card-body" style={{fontSize: "14px"}}>
                            <p className="card-title">Toyota Avanza</p>
                            <p className="fw-bold">Rp. 500.000 / hari</p>
                            <p className="card-text" style={{height: "90px"}}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias beatae natus alias, porro nisi quisquam, quidem, quisquam doloremque.
                            </p>
                            <div className="my-2">
                                <i className="bi bi-people me-2"></i>5 Orang
                            </div>
                            <div className="my-2">
                                <i className="bi bi-gear me-2"></i>Manual
                            </div>
                            <div className="my-2">
                                <i className="bi bi-calendar4 me-2"></i>24 Mei 2022
                            </div>
                            <a href="/cars" className="btn bg-button text-white w-100 mt-2 fw-bold mt-4" style={{fontSize: "14px"}}>
                                Pilih Mobil
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CardCarComponent;
