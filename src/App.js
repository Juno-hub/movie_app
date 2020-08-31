import React from 'react';

function Food({ name, picture, recommend }) {
  return ( 
    <div>
      <h2>I like {name}!</h2>
      <img src = {picture} />
      <h3>추천: {recommend}</h3>
    </div>
  );
}

const foodILike = [
  {
    name : "떡볶이",
    image : "https://t1.daumcdn.net/liveboard/dailylife/0b1c21d15a10471bafd70ae6a7a74802.jpg",
    location : "엽기떡볶이"
  },
  {
    name : "마라탕",
    image : "https://img-cf.kurly.com/shop/data/goodsview/20190508/gv00000049649_1.jpg",
    location : "라화쿵푸"
  },
  {
    name : "삼겹살",
    image : "https://www.nemopan.com/files/attach/images/2578/079/514/002/3.jpg",
    location : "어머나 생고기"
  },
  {
    name : "라면",
    image : "https://lh3.googleusercontent.com/proxy/pQ37OPYCDtA1M97rtR_dgLcBRfWPgv9cMtOYxt0yeRoJ4XMNsgLTpGeCabGRe6SKDr2a178ArEg1kdCWG17_FOlEcFsDxJAzVynqeA",
    location : "편의점_마크정식"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(function(dish){
        return <Food name={dish.name} picture={dish.image} recommend={dish.location}/>
      })}
    </div>

  );
}

export default App;
