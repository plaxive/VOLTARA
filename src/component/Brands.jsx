
import "./styles/Section.css"
import brand1 from "../assets/brand4.jpg"
import brand2 from "../assets/brand7.jpg"
import brand3 from "../assets/brand8.jpg"
import brand4 from "../assets/brand6.jpg"
const Brands = () => {

    const brands = [
        {
            name: "mercedez-benz",
            img: brand1
        },
        {
            name: "mercedez-benz",
            img: brand2,
            class: "white"
        },
        {
            name: "mercedez-benz",
            img: brand3,
            class: "black"
        },
        {
            name: "mercedez-benz",
            img: brand4,
            class: "white"
        }
    ]
  return (
    <div className="brand-wrapper">
        <h1>car category</h1>
      <div className="brand-container">
         {brands.map((brand, i) => (
            <div className="brand" key={i}>
                <div className="text">
                    <h3 className={brand.class}>{brand.name}</h3> 
                </div>
                <img src={brand.img} alt="" />
            </div>
         ))}
      </div>
    </div>
  )
}

export default Brands
