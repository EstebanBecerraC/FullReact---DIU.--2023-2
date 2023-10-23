import React, { useState } from 'react';
import PaymentApp from '../payment';

export default function SimpleForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    deptNumber: '', // Initialize as an empty string
    selection: 'Gastos comunes',
  });
  const [showPayment, setShowPayment] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Form data submitted:', formData);
    // Also, you can render the PaymentApp component conditionally here
    setShowPayment(true);
};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder='Roberto'
          disabled
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Roberto84@gmail.com'
          disabled
        />
      </div>
      <div>
        <label>N° de Departamento:</label>
        <input
          type="number"
          name="deptNumber"
          value={formData.deptNumber}
          onChange={handleInputChange}
          placeholder='202'
          disabled
        />
      </div>
      <div>
        <label>Seleccione Cuenta a Pagar:</label>
        <select
          name="selection"
          value={formData.selection}
          onChange={handleInputChange}
        >
          <option value="Gastos Comunes">Gastos Comunes</option>
          <option value="Gas">Gas</option>
          <option value="Luz">Luz</option>
          <option value="Agua">Agua</option>
        </select>
      </div>

      <button type="submit">Submit</button>
      {showPayment && <PaymentApp string={formData.selection} />}
    </form>
  
  );
}