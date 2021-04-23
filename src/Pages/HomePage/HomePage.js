import React, { Component } from "react";
import "./HomePage.css";
class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="homepage">
        <div className="homepage__list">
          <div className="homepage__list__item flex">
            <div className="homepage__list__item__img">
              <img
                src="https://cdn.baogiaothong.vn/upload/images/2019-4/profile_avatar_img/2019-11-18/tin-tuc-trong-ngay-hom-nay-1574061980-width1004height565.png"
                style={{
                  width: 130,
                  height: 80,
                  borderRadius: 6,
                }}
              />
            </div>
            <div className="homepage__list__item__content">
              Thông tin hôm nay
            </div>
          </div>
          <div className="homepage__list__item flex">
            <div className="homepage__list__item__img">
              <img
                src="https://cdn.vietnamtours247.com/2020/07/thoi-tiet-696x369.jpg"
                style={{
                  width: 130,
                  height: 80,
                  borderRadius: 6,
                }}
              />
            </div>
            <div className="homepage__list__item__content">
              Thông tin thời tiết
            </div>
          </div>
          <div className="homepage__list__item flex">
            <div className="homepage__list__item__img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-6NYKS42__On8b68ZP-QAqASEBhD4LYTav-uKY41zfvqwL631XVZkjAktoj6R3P9_9lo&usqp=CAU"
                style={{
                  width: 130,
                  height: 80,
                  borderRadius: 6,
                }}
              />
            </div>
            <div className="homepage__list__item__content">
              Thông tin sức khỏe
            </div>
          </div>
          <div className="homepage__list__item flex">
            <div className="homepage__list__item__img">
              <img
                src="https://cdn.24h.com.vn/upload/2-2021/images/2021-04-16//savic-640-1618508616-902-width640height480.jpg"
                style={{
                  width: 130,
                  height: 80,
                  borderRadius: 6,
                }}
              />
            </div>
            <div className="homepage__list__item__content">
              Thông tin thể thao
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
