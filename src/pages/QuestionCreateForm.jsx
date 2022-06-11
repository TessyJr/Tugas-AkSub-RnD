import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const QuestionCreateForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/questions`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateQuestion = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`http://localhost:4000/questions`, { title, detail })
        .then(alert("Question Created!"))
        .catch((err) => console.log(err));
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form className="question-form" onSubmit={(e) => updateQuestion(e)}>
      <h1 className="question-form__title">Create Question</h1>
      <label className="question-form__label">Title</label>
      <input
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="question-form__input"
      />
      <label className="question-form__label">Detail</label>
      <input
        id="detail"
        onChange={(e) => setDetail(e.target.value)}
        type="text"
        className="question-form__input"
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default QuestionCreateForm;
