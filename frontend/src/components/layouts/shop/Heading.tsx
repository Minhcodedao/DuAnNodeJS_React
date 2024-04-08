import Icon10 from "@/assets/icons/10.svg"
import Icon11 from "@/assets/icons/11.svg"
import Icon12 from "@/assets/icons/12.svg"
import Icon9 from "@/assets/icons/9.svg"
const Heading = () => {
  return (
    <div><section className="title">
  <div className="title-left">
    <div className="title-left-icon">
      <div className="title-left-icon-one">
        <img src={Icon9}  />
      </div>
      <div className="title-left-icon-two">
        <img src={Icon10}  />
      </div>
      <div className="title-left-icon-three">
        <img src={Icon11}  />
      </div>
      <div className="title-left-icon-four">
        <img src={Icon12}  />
      </div>
    </div>
    <div className="separator" />
    <div><p>Showing 1-16 of 32 results</p></div>
  </div>
  <div className="title-right">
    <span>Show</span>
    <button className="title-right-btn-one" >16</button>
    <span>Sort by</span>
    <button className="title-right-btn-two">
      Default
    </button>
  </div>
</section>
</div>
  )
}

export default Heading