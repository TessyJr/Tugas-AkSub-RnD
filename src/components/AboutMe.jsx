const AboutMe = () => {
  return (
    <>
      <h1 className="about__title">About me</h1>
      <div className="about">
        <div>
          <img
            src={require("../images/profilePic.jpg")}
            alt="Christopher and Dog"
            className="about__image"
          />
        </div>
        <div>
          <h2 className="about__header">Nama: </h2>
          <p className="about__detail">Christopher Nathanael</p>
          <h2 className="about__header">Tempat, tanggal lahir: </h2>
          <p className="about__detail">Jakarta, 17 Desember 2002</p>
          <h2 className="about__header">Jurusan: </h2>
          <p className="about__detail">Computer Science</p>
          <h2 className="about__header">Hobi: </h2>
          <p className="about__detail">
            Dengerin musik, main game, nonton film
          </p>
        </div>
      </div>
      <h1 className="about__title">Portofolio</h1>
    </>
  );
};

export default AboutMe;
