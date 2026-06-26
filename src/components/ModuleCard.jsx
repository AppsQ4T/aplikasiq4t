import "./ModuleCard.css";

function ModuleCard({ image, arabic, title, onClick }) {
  return (
    <div className="module-card" onClick={onClick}>

      <img
        src={image}
        alt={title}
        className="module-image"
      />

      <h2>{arabic}</h2>

      <p>{title}</p>

    </div>
  );
}

export default ModuleCard;