
import deal from "../assets/deal2.jpg"
import "./styles/Section.css"
const Deal = () => {
  return (
    <div className="deal-wrapper">
      <div className="deal-container">
        <div className="deal">
            <img src={deal} alt="" />
            <div className="text">
                <div className="top"><h1>Book a Tesla with a big discount</h1>
                <button>Book here</button></div> 
                <div className="tag">
                    <h1>50%</h1>
                    <p>for everyone Tesla car</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Deal
