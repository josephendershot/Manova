// CAROUSEL LOGIC
try {
    const carouselItems = document.querySelectorAll('.carousel-item');
    if (carouselItems.length > 0) {
        let activeIndex = 0;

        function updateCarousel() {
            carouselItems.forEach((item, index) => {
                item.classList.remove('active', 'next', 'prev', 'next-shadow', 'prev-shadow');
                
                const diff = (index - activeIndex + carouselItems.length) % carouselItems.length;
                
                if (diff === 0) item.classList.add('active');
                else if (diff === 1) item.classList.add('next');
                else if (diff === 2) item.classList.add('next-shadow');
                else if (diff === carouselItems.length - 2) item.classList.add('prev-shadow');
                else if (diff === carouselItems.length - 1) item.classList.add('prev');
            });
        }

        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                activeIndex = (activeIndex + 1) % carouselItems.length;
                updateCarousel();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
                updateCarousel();
            });
        }

        // Permitir clic en las tarjetas laterales
        carouselItems.forEach((item) => {
            item.addEventListener('click', () => {
                if (item.classList.contains('prev') || item.classList.contains('prev-shadow')) {
                    activeIndex = (activeIndex - 1 + carouselItems.length) % carouselItems.length;
                    updateCarousel();
                } else if (item.classList.contains('next') || item.classList.contains('next-shadow')) {
                    activeIndex = (activeIndex + 1) % carouselItems.length;
                    updateCarousel();
                }
            });
        });

        updateCarousel();
    }
} catch (error) {
    console.error('Error en la lógica del carrusel:', error);
}

// Legal Panel logic
try {
    const legalData = {
        aviso: `
            <div style="font-family: 'Inter', sans-serif;">
                <p style="margin-bottom: 24px; font-weight: 500;">Esta página explica cómo Manova recopila, utiliza, comparte y protege la información cuando usted utiliza el sitio web y los servicios de Manova.</p>
                <p style="margin-bottom: 24px;">Manova (la "Empresa") se compromete a mantener sólidas protecciones de privacidad para sus clientes en el ámbito de la documentación operativa para despachos profesionales. Esta Política de Privacidad está diseñada para ayudarle a entender cómo recopilamos, utilizamos y salvaguardamos la información que nos proporciona y para ayudarle a tomar decisiones informadas al utilizar nuestro Servicio.</p>
                
                <h3 style="color: #fff; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">1. Información que recopilamos</h3>
                <p style="margin-bottom: 16px;">Recopilamos tanto "Información No Personal" como "Información Personal". La Información No Personal incluye datos de uso anónimos, URL de referencia y salida, tipos de plataforma, recuento de clics e interacciones de la interfaz. La Información Personal incluye su dirección de correo electrónico, nombre, información de la firma y detalles de contacto que usted envía a través de los formularios del sitio para agendar una llamada.</p>
                <p style="margin-bottom: 16px;">Para agendar una llamada, no necesita enviar más información que su correo electrónico y datos básicos del despacho. No obstante, empleamos el uso de cookies y archivos de registro para hacer un seguimiento del comportamiento en el sitio que no lo identifica personalmente.</p>
                
                <h3 style="color: #fff; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">2. Cómo utilizamos y compartimos la información</h3>
                <p style="margin-bottom: 16px;">No vendemos, intercambiamos, alquilamos ni compartimos su Información Personal con fines de marketing con terceros sin su consentimiento explícito.</p>
                <p style="margin-bottom: 16px;">Compartimos información personal con proveedores que prestan servicios para la Empresa, como la infraestructura de comunicaciones u organizadores de agenda. Nos reservamos el derecho a compartir información personal si creemos de buena fe que el acceso, uso o preservación de la misma es razonablemente necesario para satisfacer un proceso legal, proteger contra daños a los derechos, propiedad o seguridad pública.</p>

                <h3 style="color: #fff; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">3. Cómo protegemos su información</h3>
                <p style="margin-bottom: 16px;">Implementamos estrictas medidas de seguridad diseñadas para proteger su información institucional contra el acceso no autorizado. Utilizamos salvaguardas tecnológicas como el cifrado y la tecnología de capa de conexión segura. Sin embargo, dado que ningún sistema es infalible, al utilizar el Servicio usted reconoce y acepta los riesgos inherentes.</p>

                <h3 style="color: #fff; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">4. Cambios y Contacto</h3>
                <p style="margin-bottom: 16px;">Manova se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios significativos se notificarán de forma visible en el Sitio. Para cualquier duda respecto a estas prácticas, contáctenos en <a href="mailto:hola@manova.mx" style="color: #bda36e; text-decoration: underline;">hola@manova.mx</a>.</p>
            </div>
        `,
        terminos: `
            <div style="font-family: 'Inter', sans-serif;">
                <p style="margin-bottom: 24px; font-weight: 500;">Estos términos rigen su uso del sitio web operado por Manova y adaptan las pautas comerciales aplicables para nuestros entregables de documentación operativa.</p>
                <p style="margin-bottom: 24px;">Al acceder o utilizar el Sitio y sus servicios, usted acepta estos Términos en su nombre o en el de la entidad a la que representa. Si usted es menor de 18 años o no está de acuerdo con estas disposiciones, no debe acceder al Sitio.</p>

                <h3 style="color: #fff; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">1. Acceso al Sitio y Cesión de Uso</h3>
                <p style="margin-bottom: 16px;">Sujeto a estos Términos, la Empresa le otorga una licencia intransferible, no exclusiva, revocable y limitada para usar el Sitio con fines informativos para la sistematización de su despacho.</p>
                <p style="margin-bottom: 16px;">Usted tiene prohibido licenciar, vender, alquilar, arrendar, o explotar comercialmente la información, los diagramas, los formatos o recursos publicados en el Sitio sin nuestro consentimiento formal. Asimismo, no puede aplicar ingeniería inversa al sitio con el propósito de construir un producto competitivo.</p>
                
                <h3 style="color: #fff; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">2. Contenido del Usuario e Indemnización</h3>
                <p style="margin-bottom: 16px;">Cualquier material, manual anterior, o documento en bruto que nos comparta será tratado con estricta confidencialidad operativa. Sin embargo, usted seguirá siendo enteramente responsable de cualquier implicación normativa o legal contenida en los materiales originales de su firma (su "Contenido de Usuario").</p>
                <p style="margin-bottom: 16px;">Usted acepta indemnizar y eximir de responsabilidad a la Empresa frente a reclamaciones derivadas del contenido inexacto proporcionado por su equipo que termine consolidado en manuales operativos.</p>

                <h3 style="color: #fff; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">3. Exenciones y Limitación sobre Responsabilidad</h3>
                <p style="margin-bottom: 16px;">Toda publicación se proporciona "tal cual". Manova asiste en compilar y redactar, pero la implementación final recae sobre la directiva del despacho. Renunciamos expresamente a todas las garantías obligatorias o implícitas.</p>
                <p style="margin-bottom: 16px;">En la medida máxima permitida por la ley, en ningún caso la Empresa será legalmente responsable ante usted o terceros por lucro cesante o daños punitivos ni consecuencias derivadas directamente o indirectamente del empleo no supervisado de su documentación.</p>

                <h3 style="color: #fff; font-size: 18px; margin-top: 24px; margin-bottom: 12px;">4. Resolución de Disputas (Arbitraje)</h3>
                <p style="margin-bottom: 16px;">Ambas partes se comprometen a buscar conferencias de resolución de fondo y buena fé de manera paralela y privada en un plazo estipulado previo de 60 días en lugar de cualquier demanda judicial, incluyendo una exención recíproca a pleitos colectivos.</p>
                <p style="margin-bottom: 16px;">Para notificaciones o aclaraciones puntuales escriba a <a href="mailto:hola@manova.mx" style="color: #bda36e; text-decoration: underline;">hola@manova.mx</a>.</p>
            </div>
        `
    };

    const linkAviso = document.getElementById('link-aviso');
    const linkTerminos = document.getElementById('link-terminos');
    const closeLegal = document.getElementById('close-legal');
    const legalPanel = document.getElementById('legal-panel');
    const legalTitle = document.getElementById('legal-title');
    const legalContent = document.getElementById('legal-content');

    function openLegalPanel(title, content) {
        legalTitle.innerText = title;
        legalContent.innerHTML = content;
        legalPanel.style.display = 'block';
        setTimeout(() => {
            legalPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    if (linkAviso) {
        linkAviso.addEventListener('click', (e) => {
            e.preventDefault();
            openLegalPanel('AVISO DE PRIVACIDAD', legalData.aviso);
        });
    }

    if (linkTerminos) {
        linkTerminos.addEventListener('click', (e) => {
            e.preventDefault();
            openLegalPanel('TÉRMINOS DE SERVICIO', legalData.terminos);
        });
    }

    if (closeLegal) {
        closeLegal.addEventListener('click', () => {
            legalPanel.style.display = 'none';
        });
    }
} catch (error) {
    console.error('Error en la lógica legal:', error);
}
