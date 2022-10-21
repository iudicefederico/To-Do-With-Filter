import "./ToDos.css";
export default function ToDos(props) {
  const { id, tarea, checked, onBorrar, onChange } = props;
  return (
    <li className="list">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => onChange(id)}
      />
      <span>{tarea}</span>
      <button onClick={() => onBorrar(id)}>x</button>
    </li>
  );
}
