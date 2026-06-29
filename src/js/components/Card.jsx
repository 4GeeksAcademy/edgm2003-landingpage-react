import React from "react";

const Card = () => {
    const maquinariaCAT = [
        {
            modelo: "Retroexcavadora CAT 416C",
            descripcion: "Equipo versátil ideal para excavación de zanjas, carga pesada y demolición ligera. Cuenta con un motor de alta eficiencia, tracción 4x4 y un brazo extensible de gran alcance para optimizar tiempos en obras urbanas.",
            precio: "$35 / hora",
            imagenUrl: "https://cdn.ironpla.net/i/4909/837/9bf72897-49ea-4050-b72e-91fb487c44ec-hr.jpg"
        },
        {
            modelo: "Excavadora Hidráulica CAT 320",
            descripcion: "Máxima potencia y rendimiento en movimiento de tierra a gran escala. Equipada con tecnología de control de profundidad integrada, cabina ergonómica de alta seguridad y un balde reforzado para terrenos de alta dureza.",
            precio: "$60 / hora",
            imagenUrl: "https://maquinariapesadabolivia.com/wp-content/uploads/2024/07/Excavadora-Caterpillar-320C.jpg"
        },
        {
            modelo: "Tractor de Orugas CAT D7G",
            descripcion: "Diseñado para los trabajos de empuje y nivelación más exigentes. Sus robustas orugas garantizan una excelente tracción en terrenos pantanosos o pendientes pronunciadas, maximizando la productividad en aperturas de vías.",
            precio: "$75 / hora",
            imagenUrl: "https://image.made-in-china.com/2f0j00bdWlckqywtow/Used-Bulldozer-Cat-D7g-Used-Caterpillar-D7g-Dozer-D3-D4-D5-D6-D7-D8-D9-Bulldozer.webp"
        },
        {
            modelo: "Cargador Frontal CAT 955L",
            descripcion: "Un clásico de la fuerza y la durabilidad mecánica. Perfecto para la carga eficiente de agregados, camiones e inventarios de materiales pesados en canteras, gracias a su sistema hidráulico de rápida respuesta.",
            precio: "$45 / hora",
            imagenUrl: "https://tallerescapelan.com/wp-content/uploads/2019/09/products-19-0848-0_-(1)--(custom).jpg"
        }
    ];

    return (
        <div className="row g-4 w-100 m-0">
            {maquinariaCAT.map((maquina, index) => (
                <div className="col-12 col-md-6 col-lg-3" key={index}>
                    <div className="card h-100 text-center shadow-sm border-secondary-subtle">
                        
                        <img 
                            src={maquina.imagenUrl} 
                            className="card-img-top" 
                            alt={maquina.modelo}
                            style={{ height: "190px", objectFit: "cover" }}
                        />
                        
                        <div className="card-body d-flex flex-column justify-content-between p-4">
                            <div>
                                <h5 className="card-title fw-bold text-dark mb-3">{maquina.modelo}</h5>
                                <p className="card-text text-muted small text-start" style={{ lineHeight: "1.5" }}>
                                    {maquina.descripcion}
                                </p>
                            </div>
                            
                            <div className="mt-3 bg-light p-2 rounded border">
                                <span className="text-secondary small d-block">Tarifa de Alquiler</span>
                                <strong className="fs-5 text-primary">{maquina.precio}</strong>
                            </div>
                        </div>
                        
                        <div className="card-footer bg-white py-3 border-top-0">
                            <a href="#" className="btn btn-warning fw-bold text-dark w-100">
                                Cotizar Alquiler
                            </a>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;