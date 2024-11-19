import React from 'react'

const Advertisements = () => {
  const adData = [
    {title: "Ad1", description: "Description1", image: image},
    {title: "Ad2", description: "Description2", image: image},
    {title: "Ad3", description: "Description3", image: image},
    {title: "Ad4", description: "Description4", image: image},
    {title: "Ad5", description: "Description5", image: image},
    {title: "Ad6", description: "Description6", image: image},
  ];
  
  const renderAdCards = () => {
    const adCards = adData.map((ad) => {
      const adCard = (
        <div>
          <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src='test.com' alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{ad.title}</h5>
              <p className="card-text">{ad.description}</p>
              <a href="#" className="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
      );
      return adCard;
    });
    return adCards;
  }
  return (
    <div className='adCard'>
      {renderAdCards()}
    </div>
  )
}

export default Advertisements