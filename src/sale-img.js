
import img from "./assets/images/big.png"


function SaleImg()
{
    return(
        <div class="sale-img">
        <img src={img} alt="sale-image"></img>
        <div class="sale__img--offer">
            <h2>udemy flash sale! 24 hours to save</h2>
            <p>get the top courses for just 499.just one day to save but a lifetime to learn</p>
        </div>
    </div>
    )
}
export default SaleImg