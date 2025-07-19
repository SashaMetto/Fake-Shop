import shoes from "../images/shoes3.jpg";
import iphone from "../images/iphone.jpg";
import s22 from "../images/s22.jpg";
import { Link } from "react-router-dom";
export default function home() {
  return (
    <main style={{ paddingTop: "31px", maxWidth: "2000px" }}>
      <div className="home_promotion">
        <img alt="nike" src={shoes}></img>
        <div className="home_promotion_Nike">
          <h1 className="home_promotion_Nike home_promotion_Nike__header">
            Nike
          </h1>
          <h1 className="home_promotion_Nike home_promotion_Nike__header">
            Just do it!
          </h1>
          <Link to="/shoes?brand=Nike" style={{ textDecoration: "31px" }}>
            <button className="home_promotion_Nike home_promotion_Nike__button promotion___button">
              Go!
            </button>
          </Link>
        </div>
      </div>
      <div
        className="home_promotion"
        style={{ marginTop: "151px", backgroundColor: "whitesmoke" }}
      >
        <div className="home_promotion_iPhone">
          <h1 className="home_promotion_iPhone home_promotion_iPhone__header">
            Apple smartphones
          </h1>
          <Link to="/phones?brand=Apple" style={{ textDecoration: "31px" }}>
            <button className="home_promotion_iPhone home_promotion_iPhone__button promotion___button">
              Buy
            </button>
          </Link>
        </div>
        <img
          alt="iphone"
          src={iphone}
          style={{ width: "65%", height: "auto" }}
        ></img>
      </div>
      <div
        className="home_promotion_s22"
        style={{ marginTop: "151px", backgroundColor: "whitesmoke" }}
      >
        <img
          alt="s22"
          src={s22}
          style={{ width: "100%", height: "auto" }}
        ></img>
        <div className="home_promotion_s22__data">
          Samsung Galaxy
          <Link to="/phones?brand=Samsung" style={{ textDecoration: "31px" }}>
            <button className="home_promotion_iPhone home_promotion_iPhone__button promotion___button">
              Buy
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
