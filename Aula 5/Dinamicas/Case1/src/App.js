import { useState } from "react";
import tarefas from "./Data/tasks";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [listaTarefas, setListaTarefa] = useState([...tarefas]);
  const [umaTarefa, setUmaTarefa] = useState("");
  const [atualizaTarefa, setAtualizaTarefa] = useState({});

  function adicionaTarefa() {
    const novaTarefa = {
      id: listaTarefas.length + 1,
      descricao: umaTarefa,
      finalizado: false,
    };
    setListaTarefa([...listaTarefas, novaTarefa]);
    setUmaTarefa("");
  }

  function eliminaTarefa(id) {
    const novaLista = listaTarefas.filter((tarefa) => tarefa.id !== id);
    setListaTarefa(novaLista);
  }

  function atualizaTarefaEspecifica() {
    const novaLista = listaTarefas.map((tarefa) =>
      tarefa.id === atualizaTarefa.id ? atualizaTarefa : tarefa
    );
    setListaTarefa(novaLista);
    setAtualizaTarefa({});
  }

  return (
    <div className="container App">
      <br />
      <br />
      <h2>Lista de Tarefas</h2>
      <br />
      <br />
      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            type="text"
            value={atualizaTarefa.descricao || ""}
            onChange={(e) =>
              setAtualizaTarefa({
                ...atualizaTarefa,
                descricao: e.target.value,
              })
            }
          ></input>
        </div>

        <div className="col-auto">
          <button
            className="btn btn-lg btn-success"
            onClick={atualizaTarefaEspecifica}
          >
            Atualizar
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <input
            className="form-control form-control-lg"
            type="text"
            value={umaTarefa}
            onChange={(e) => setUmaTarefa(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success" onClick={adicionaTarefa}>
            Adicionar Tarefa
          </button>
        </div>
      </div>
      {listaTarefas.map((tarefa) => (
        <div key={tarefa.id} className="col mytask">
          <span>{tarefa.id} </span>
          <span>{tarefa.descricao}</span>
          <div className="icone">
            <span title="editar">
              <FontAwesomeIcon
                icon={faPen}
                onClick={() =>
                  setAtualizaTarefa({
                    id: tarefa.id,
                    descricao: tarefa.descricao,
                    finalizado: tarefa.finalizado,
                  })
                }
              />
            </span>
            <span title="eliminar">
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() => eliminaTarefa(tarefa.id)}
              />
            </span>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
}

export default App;
