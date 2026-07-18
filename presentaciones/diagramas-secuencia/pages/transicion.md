## 🚀 2. Transición a Nivel Componentes y Despliegue

### Elevando el nivel de abstracción
*   **Los participantes** ya no son clases de código. Son **procesos independientes ejecutándose en red** (Microservicios, APIs externas, Bases de datos, Message Brokers).
*   **Los mensajes** no son métodos locales. Son **protocolos de comunicación** (HTTP/REST, gRPC, AMQP, SQL).
*   **Resiliencia obligatoria:** En red, el fallo parcial es la norma. El diagrama de secuencia arquitectónico debe reflejar cómo el sistema se recupera de los errores de red.

<br>

### 💡 Analogía: Síncrono vs. Asíncrono
*   **Llamadas Síncronas (HTTP):** Como una **llamada telefónica**. Te quedas esperando en línea a que contesten. Si el receptor no atiende, la llamada falla de inmediato.
*   **Llamadas Asíncronas (Colas):** Como un **mensaje de WhatsApp**. Envías el mensaje y sigues con tu vida. El receptor lo procesará cuando esté disponible.
