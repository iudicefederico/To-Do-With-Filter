import { useState } from "react";
import "./App.css";
import ToDos from "./components/ToDos";
import Form from "./components/Form";

export default function App() {
  const [tarea, setTarea] = useState("");
  const [listadoTareas, setListadoTareas] = useState([]);
  const [pendientes, setPendientes] = useState("No hay pendientes");
  const [original, setOriginal] = useState([]);

  function handleChange(e) {
    setTarea(e.target.value);
  }

  function handleSubmit() {
    const nuevaTarea = { id: Math.random(), tarea: tarea, checked: false };
    const addNew = [nuevaTarea, ...listadoTareas];
    const addNewO = [nuevaTarea, ...original];
    setTarea("");
    if (listadoTareas !== []) {
      setPendientes("");
    }
    setListadoTareas(addNew);
    setOriginal(addNewO);
  }

  function onBorrar(id) {
    const deleted = listadoTareas.filter((item) => item.id !== id);
    const deletedO = original.filter((item) => item.id !== id);
    if (listadoTareas.length === 1) {
      setPendientes("No hay pendientes");
    }
    setListadoTareas(deleted);
    setOriginal(deletedO);
  }

  function handleChecked(id) {
    const oldList = [...listadoTareas];
    const oldListO = [...original];

    const currentTask = oldList.find((item) => item.id === id);
    const currentTaskO = oldListO.find((item) => item.id === id);

    const currentTaskIndex = oldList.findIndex((item) => item.id === id);
    const currentTaskIndexO = oldListO.findIndex((item) => item.id === id);

    const currentTaskChecked = currentTask.checked;
    const currentTaskCheckedO = currentTaskO.checked;

    oldList[currentTaskIndex].checked = !currentTaskChecked;
    oldListO[currentTaskIndexO].checked = !currentTaskCheckedO;

    setListadoTareas(oldList);
    setOriginal(oldListO);
  }

  function handleAll() {
    setListadoTareas(original);
  }

  function handleCompleted() {
    const listCompleted = original.filter((item) => item.checked === true);
    setListadoTareas(listCompleted);
  }

  function handleActive() {
    const listActive = original.filter((item) => item.checked === false);
    setListadoTareas(listActive);
  }

  return (
    <div>
      <div>
        <div className="div">
          <h1>To Do List</h1>
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            tarea={tarea}
          />
        </div>
        <div className="div">
          <button type="button" onClick={handleAll}>
            All
          </button>
          <button type="button" onClick={handleCompleted}>
            Completed
          </button>
          <button type="button" onClick={handleActive}>
            Active
          </button>
        </div>
        <div className="div">
          <h2>Tareas</h2>
          <ul className="div__list">
            {listadoTareas.map((tarea) => (
              <ToDos
                key={tarea.id}
                onBorrar={onBorrar}
                id={tarea.id}
                checked={tarea.checked}
                onChange={handleChecked}
                tarea={tarea.tarea}
              />
            ))}
            <h4>{pendientes}</h4>
          </ul>
        </div>
      </div>
    </div>
  );
}
