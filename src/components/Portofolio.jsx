import { Link } from "react-router-dom";

const Portofolio = ({ title, detail, link, id }) => {
  return (
    <div className="card">
      <h5 className="card__title">{title}</h5>
      <p className="card__detail">{detail}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card__link"
      >
        GitHub
      </a>
    </div>
  );
};

export default Portofolio;
