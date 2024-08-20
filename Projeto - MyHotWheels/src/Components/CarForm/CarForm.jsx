
import React, { useState } from 'react';

import '../CarForm/CarForm.css'

function CarForm() {
  return (
    <div className="content text-center">
      <h1>Adicionar Carro</h1>
      <form className="form-container" onSubmit={console.log('chegou!')}>
        <div className="form-group">
          <label className="col-form-label">Nome</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label className="col-form-label">Marca</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label className="col-form-label">Cor</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label className="col-form-label">Ano</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <span>
            <button type="submit" className="mt-3 btn btn-light">Adicionar</button>

          </span>
          <span>
            <button type="button" className="mt-3 btn btn-error">Cancelar</button>
          </span>


        </div>
      </form>
    </div>
  );
}

export default CarForm;