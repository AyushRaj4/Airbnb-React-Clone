const RecentSearches = ({ city, desc, img }) => {
  return (
    <div className="result-item result-item2">
      <img src={img} alt="" />
      <div>
        <h4>{city}</h4>
        <h4>{desc}</h4>
      </div>
    </div>
  );
};

export default RecentSearches;
