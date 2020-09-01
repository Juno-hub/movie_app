import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id : 1,
    name : "떡볶이",
    image : "https://t1.daumcdn.net/liveboard/dailylife/0b1c21d15a10471bafd70ae6a7a74802.jpg",
    location : "엽기떡볶이",
    rating : "5.0"
    
  },
  { 
    id : 2,
    name : "마라탕",
    image : "https://img-cf.kurly.com/shop/data/goodsview/20190508/gv00000049649_1.jpg",
    location : "라화쿵푸",
    rating : 4.5
  },
  { 
    id : 3,
    name : "삼겹살",
    image : "https://www.nemopan.com/files/attach/images/2578/079/514/002/3.jpg",
    location : "어머나 생고기",
    rating : 4.7
  },
  {
    id : 4,
    name : "라면",
    image : "https://lh3.googleusercontent.com/proxy/pQ37OPYCDtA1M97rtR_dgLcBRfWPgv9cMtOYxt0yeRoJ4XMNsgLTpGeCabGRe6SKDr2a178ArEg1kdCWG17_FOlEcFsDxJAzVynqeA",
    location : "편의점_마크정식",
    rating : "4.0"
  }
];

function Food({ name, picture, recommend, rating }) {
  return ( 
    <div>
      <h2>I like {name}!</h2>
      <img src = {picture} alt = {name} />
      <h3>추천: {recommend}</h3>
      <h4>평점: {rating}/5.0</h4>
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  recommend : PropTypes.string.isRequired,
  rating : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

function App() {
  return (
    <div>
      {foodILike.map(function(dish){
        return <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          recommend={dish.location}
          rating={dish.rating}
        />
      })}
    </div>

  );
}

export default App;
