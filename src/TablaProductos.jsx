import React from 'react';
import FilaCategoria from './FilaCategoria';

const TablaProductos = ({ productos }) => {
  const categorias = productos.reduce((categorias, producto) => {
    if (!categorias.includes(producto.categoria)) {
      categorias.push(producto.categoria);
    }
    return categorias;
  }, []);

  return (
    <table className="tabla-productos">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map((categoria) => (
          <FilaCategoria
            key={categoria}
            categoria={categoria}
            productos={productos.filter(producto => producto.categoria === categoria)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TablaProductos;
