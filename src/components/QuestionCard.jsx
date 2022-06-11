import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

const deleteQuestion = (id, e) => {
  e.preventDefault();
  axios
    .delete(`https://localhost:4000/questions/${id}`)
    .then(() => this.setState({ status: "Delete successful" }))
    .catch((err) => {
      console.log(err);
    });
};

const QuestionCard = ({ title, detail, id }) => {
  return (
    <div className="card">
      <h5 className="card__title">{title}</h5>
      <p className="card__detail">{detail}</p>
      <div className="card__action">
        <Link className="btn btn-primary" to={`/question/${id}/edit`}>
          Edit
        </Link>
      </div>
    </div>
  );
};

export default QuestionCard;
