import AboutMe from "../components/AboutMe";
import Portofolio from "../components/Portofolio";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";

const About = () => {
  const [portofolio, setPortofolio] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPortofolio = async () => {
      const res = await axios.get("http://localhost:4000/portofolio");
      setPortofolio(res.data);
    };
    fetchPortofolio();
  }, []);

  const renderPortofolioList = () => {
    let portofolioList = portofolio;
    if (searchQuery) {
      portofolioList = portofolioList.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return portofolioList.map(({ title, detail, link, id }) => {
      return (
        <Portofolio
          title={title}
          detail={detail}
          link={link}
          id={id}
          key={id}
        />
      );
    });
  };

  return (
    <>
      <AboutMe />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="list">{renderPortofolioList()}</div>
    </>
  );
};

export default About;
