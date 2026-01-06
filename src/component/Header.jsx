

import "./styles/Section.css"

import header from "../assets/header.png"

const Header = ({darkMode, setDarkMode}) => {

  const blocks = [
    {
      icon: "bi bi-calendar",
      title: "200mph",
      details: "top speed",
      color: "red"
    },
    {
      icon: "bi bi-calendar",
      title: "4,561 lbs",
      details: "weight",
      color: "blue"
    },
    {
      icon: "bi bi-calendar",
      title: "396ml",
      details: "distance",
      color: "purple"
    },
    {
      icon: "bi bi-calendar",
      title: "1.99s",
      details: "0-60ml",
      color: "green"
    },
    {
      icon: "bi bi-calendar",
      title: "200mph",
      details: "top speed",
      color: "orange"
    },
  ]
  return (
    <div className="header-wrapper glow">
      <div className="header-container ">
        <div className="left">
          <span className="electric">Electric car</span>
          <h1><span>mini</span> <br /> Electric</h1>
          <p>iconic styling fun loving personality, a piethora of options for you to personalise your mini with</p>
          <span className="price">from <h3>$29,000</h3></span>
          <div className="btn">
            <button>Build your mini</button>
            <div className="icon" onClick={() => setDarkMode(prev => !prev)}><i className="bi bi-moon"></i></div>
            
          </div>
        </div>
        <div className="middle">
          <img src={header} alt="" className="float-car" />
        </div>
        <div className="right">
          {blocks.map((block, i) => (
            <div className="block" key={i}>
              <i className={`${block.icon} ${block.color}`}></i>
              <h4>{block.title}</h4>
              <p>{block.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
