import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4 mt-5">
            <div className="container text-center text-md-start">
                <div className="row text-center text-md-start">
                    
                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-warning">Repuestos & Maquinaria CAT</h5>
                        <p className="small text-secondary" style={{ lineHeight: "1.6" }}>
                            Tu aliado estratégico en movimiento de tierra, construcción y minería. Proveemos repuestos genuinos y soluciones de alquiler adaptadas a la medida de tu proyecto.
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-warning">Servicios</h5>
                        <ul className="list-unstyled small">
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Alquiler por Hora</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Catálogo de Repuestos</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Soporte Técnico</a></li>
                            <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">Cotizaciones Básicas</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 fw-bold text-warning">Contacto</h5>
                        <ul className="list-unstyled small text-secondary">
                            <li className="mb-2"><i className="bi bi-geo-alt-fill me-2"></i> Zona Industrial, Galpón Principal</li>
                            <li className="mb-2"><i className="bi bi-envelope-fill me-2"></i> soporte@tusitiocat.com</li>
                            <li className="mb-2"><i className="bi bi-telephone-fill me-2"></i> +1 800 CAT PARTS</li>
                        </ul>
                    </div>

                </div>

                <hr className="mb-4 border-secondary" />

                <div className="row align-items-center">
                    <div className="col-md-12 text-center">
                        <p className="small text-secondary m-0">
                            Copyright &copy; 2026 Todos los derechos reservados. Todas las tarifas y presupuestos de envíos se calculan en dólares ($).
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;