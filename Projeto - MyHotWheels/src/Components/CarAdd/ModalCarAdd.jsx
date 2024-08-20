import './CarAdd.css';
import { useState, useEffect } from 'react';

const ModalCarAdd = ({ isOpen, onClose, data, setData, dataEdit }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [manufacture, setManufacture] = useState('');

  useEffect(() => {
    if (dataEdit.id) {
      setName(dataEdit.name || '');
      setBrand(dataEdit.brand || '');
      setColor(dataEdit.color || '');
      setManufacture(dataEdit.manufacture || '');
    } else {
      setName('');
      setBrand('');
      setColor('');
      setManufacture('');
    }
  }, [dataEdit]);

  const handleSave = () => {
    if (!name || !brand || !color || !manufacture) return;

    let updatedData;
    if (dataEdit.id) {
      updatedData = data.map(item => 
        item.id === dataEdit.id ? { ...item, name, brand, color, manufacture } : item
      );
    } else {
      const newCar = {
        id: data.length + 1, // ID baseado no tamanho do array
        name,
        brand,
        color,
        manufacture
      };
      updatedData = [...data, newCar];
    }

    localStorage.setItem('cad_car', JSON.stringify(updatedData));
    setData(updatedData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`modal fade ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{dataEdit.id ? 'Editar Carro' : 'Adicionar Carro'}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Nome</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Marca</label>
              <input type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Cor</label>
              <input type="text" className="form-control" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Ano</label>
              <input type="text" className="form-control" value={manufacture} onChange={(e) => setManufacture(e.target.value)} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={onClose}>Cancelar</button>
            <button type="button" className="btn btn-success" onClick={handleSave}>Salvar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCarAdd;
