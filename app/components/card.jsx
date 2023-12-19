const Card = ({ title, backgroundImage, isWide }) => {
  return (
    <div
      className={`card ${isWide ? "wide" : ""}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="card-header">{title}</div>
      <div className="card-content">Card Content</div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card title="Überschrift 1" backgroundImage="/card1.png" />
      <Card title="Überschrift 2" backgroundImage="/card2.png" />
      <Card title="Überschrift 3" backgroundImage="/card4.1.png" isWide />
      <Card title="Überschrift 4" backgroundImage="/card3.png" />
    </div>
  );
};

export default CardContainer;
