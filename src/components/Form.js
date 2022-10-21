import "./Form.css";

export default function Form({ handleChange, handleSubmit, tarea }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Agregar tarea..."
        onChange={handleChange}
        value={tarea}
      />
      <button type="button" className="btn" onClick={handleSubmit}>
        Agregar
      </button>
    </form>
  );
}
