import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"
import four from "../assets/images/four.jpg"
import five from "../assets/images/five.jpg"





function Recommended()
{
    return(
        <div class="recommended">
        <h1 class="recommended__title">Recommended For You</h1>
        <p>pick me best fit</p>
        <div class="recommended__container">

            <div class="course__card">
                <img src={two} alt="two"></img>
                <h3>2023 python Data visaulisation masterclass</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course__card">
                <img src={three} alt="two"></img>
                <h3>Web Development bootcamp 2023</h3>
                <p>col steele</p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course__card">
                <img src={four} alt="two"></img>
                <h3>Master UI/UX Designing with figma</h3>
                <p>col steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="course__card">
                <img src={five} alt="two"></img>
                <h3>Basic to advance progaramming with Emc</h3>
                <p>col steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div>
    </div>
    )
}
export default Recommended