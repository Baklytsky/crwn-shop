import '../category-item/category-item.styles.scss'
import {Link} from "react-router-dom";

const CategoryItem = ({products, title}) => {
  const imageUrl = products[0].imageUrl
  return (
      <Link className='category-container' to={`shop/${title}`}>
        <img src={imageUrl} alt={title}/>
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </Link>
  )
}

export default CategoryItem