---
class: compact-slide
---

## 🔁 Bucles y Alternativas (loop / alt)

Representar flujos condicionales e iterativos en diagramas de secuencia.

```mermaid
sequenceDiagram
  autonumber
  participant Pedido
  participant Item as ItemPedido

  loop Para cada item del pedido
    Pedido->>Item: obtenerSubtotal()
    activate Item
    alt Si el precio del item > $100
      Item-->>Pedido: subtotal con descuento
    else Si no
      Item-->>Pedido: subtotal normal
    end
    deactivate Item
  end
```

<div class="mt-4 text-xs text-indigo-300">
  ⚠️ <strong>Recomendación Práctica:</strong><br>
  Aunque esta sintaxis es 100% válida en UML, incluir bucles y alternativas complejas suele dificultar la lectura y el mantenimiento del diagrama. 
  Salvo que sea estrictamente necesario para comunicar la lógica, <strong>recomendamos diseñar un diagrama de secuencia limpio y lineal para cada situación o escenario</strong>.
</div>
