import "./category.css";
import womenfashion from "../../img/womenfashion.png";
import internet_of_things from "../../img/internet_of_things.png";

const Category = () => {

    return (
        <div className="category_container2">
            <div className="box-category">
                <button >
                    <img className="boxImage" src={womenfashion} alt="img" />
                    <p>Womwn's fashion</p>
                </button>
            </div>
            <div className="box-category">
                <button >
                    <img className="boxImage" src={internet_of_things} alt="img" />
                    <p>Electronic device</p>
                </button>
            </div> 
        </div>
    )
}

export default Category;