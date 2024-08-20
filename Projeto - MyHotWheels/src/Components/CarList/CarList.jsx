import ModalCarAdd from "../CarAdd/ModalCarAdd";
import './CarList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const CarList = () => {
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const db_car = localStorage.getItem('cad_car') ? JSON.parse(localStorage.getItem('cad_car')) : [];
    setData(db_car);
  }, []);

  const handleRemove = (id) => {
    const newArray = data.filter((item) => item.id !== id);
    setData(newArray);
    localStorage.setItem('cad_car', JSON.stringify(newArray));
  };

  const handleEdit = (car) => {
    setDataEdit(car);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setDataEdit({});
    setIsModalOpen(true);
  };

  return (
    <div className="content text-center">
      <div className="modal-button-container">
        <button className="btn btn-add" onClick={handleAdd}>Adicionar Carro</button>
      </div>

      <h1>Lista de Carros</h1>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Marca</th>
              <th scope="col">Ano</th>
              <th scope="col">Cor</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((car, index) => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.brand}</td>
                <td>{car.manufacture}</td>
                <td>{car.color}</td>
                <td>
                  <FontAwesomeIcon icon={faTrashCan} onClick={() => handleRemove(car.id)} />
                  <FontAwesomeIcon icon={faPen} onClick={() => handleEdit(car)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalCarAdd 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={data}
        setData={setData}
        dataEdit={dataEdit}
      />
    </div>
  );
};

export default CarList;
