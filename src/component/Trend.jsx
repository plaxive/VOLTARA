

import trend1 from "../assets/trend1.png"
import trend2 from "../assets/trend2.png"
import trend3 from "../assets/trend3.png"
import trend4 from "../assets/trend4.png"

const Trend = () => {

    const trends = [
         {
            name: "Tesla",
            img: trend2,
            price: "$29,000",
            class: "blue"
         },
         {
            name: "Tesla",
            img: trend1,
            price: "$29,000"
         },
         {
            name: "Tesla",
            img: trend3,
            price: "$29,000"
         },
         {
            name: "Tesla",
            img: trend4,
            price: "$29,000"
         },
    ]
  return (
    <div className="trend-wrapper">
        <h2>Trend vehicles</h2>
      <div className="trend-container">
        {trends.map((trend, i) => (
            <div className={`trend ${trend.class}`} key={i}>
                <div className="text">
                    <h3>{trend.name}</h3>
                </div>
                <div className="img-container">
                    <img src={trend.img} alt="" />
                </div>
                <div className="price">
                    <p>{trend.price}</p>
                    <button>Book now</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Trend
