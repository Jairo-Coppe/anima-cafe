import React from 'react';

const FilaProducto = ({ producto }) => {
  const { nombre, precio, stock } = producto;
  return (
    <tr className="fila-producto">
      <td className={stock === 0 ? 'sin-stock' : ''}>{nombre}</td>
      <td>{precio}</td>
      <td>{stock}</td>
    </tr>
  );
};

export default FilaProducto;
