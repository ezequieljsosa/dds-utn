## 🧭 1. El Diagrama de Secuencia Tradicional

### Enfoque clásico: Colaboración de Objetos de Dominio
*   **Participantes:** Instancias de clases del modelo de dominio.
*   **Mensajes:** Envío de mensajes locales en memoria (llamadas a métodos).
*   **Ámbito:** Todo ocurre dentro de un único proceso de ejecución (sin red ni latencia).

<div class="gamma-card p-4 mt-4">

```mermaid
sequenceDiagram
  autonumber
  participant Pedido
  participant Item as ItemPedido
  participant Producto
  participant Stock

  Pedido->>Item: calcularSubtotal()
  activate Item
  Item->>Producto: getPrecio()
  activate Producto
  Producto-->>Item: precio (decimal)
  deactivate Producto
  Item-->>Pedido: subtotal (decimal)
  deactivate Item

  Pedido->>Stock: descontar(cantidad)
  activate Stock
  Stock->>Stock: actualizarCant(cantidad)
  Stock-->>Pedido: ok
  deactivate Stock
```

</div>
