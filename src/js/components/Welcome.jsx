import React from "react";

const Welcome = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3 text-start">
            <div className="container-fluid py-4 ps-0">
                <h1 className="display-5 fw-bold text-dark">¡Mantén tu maquinaria en movimiento!</h1>
                <p className="fs-5 text-muted mt-3">
                    Encuentra el catálogo más completo de <strong>repuestos Caterpillar</strong> garantizados 
                    y accede a nuestro servicio de <strong>alquiler de maquinaria pesada</strong> con soporte 
                    técnico especializado. Todo lo que tu proyecto necesita en un solo lugar.
                </p>
                <div className="d-flex gap-3 mt-4">
                    <button className="btn btn-primary btn-lg px-4" type="button">
                        Ver Repuestos
                    </button>
                    <button className="btn btn-outline-secondary btn-lg px-4" type="button">
                        Cotizar Alquiler
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;