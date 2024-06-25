import React from 'react';
import FilaProducto from './FilaProducto.jsx';

const FilaCategoria = ({ categoria, productos }) => {
  return (
    <>
      <tr className="fila-categoria">
        <td colSpan="3">{categoria}</td>
      </tr>
      {productos.map(producto => (
        <FilaProducto key={producto.nombre} producto={producto} />
      ))}
    </>
  );
};

export default FilaCategoria;
