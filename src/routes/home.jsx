import shoes from "../images/shoes3.jpg"
export default function home() {
    return (
      <main style={{ paddingTop: "31px" }}>
        <div class="home_promotion">
        <img alt="search" src={shoes}></img>
         <div class="home_promotion_Nike">
          <h1 class="home_promotion_Nike home_promotion_Nike__header">Pss...</h1>
          <h1 class="home_promotion_Nike home_promotion_Nike__header">Want some Nike?</h1>
          <button class="home_promotion_Nike home_promotion_Nike__button">Shop Nike</button>
         </div>
        </div>
      </main>
    );
  }