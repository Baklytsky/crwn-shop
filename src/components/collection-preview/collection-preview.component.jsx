import './collection-preview.styles.scss'
import ProductCard from "../product-card/product-card.component";
import {useNavigate} from "react-router-dom";

const CollectionPreview = ({title, products})=> {
  const navigate = useNavigate()
  const goToCollection = (title) => {
    navigate(`${title}`)
  }

  return (
      <div className='category-preview-container'>
        <h2><span className='title' onClick={()=>goToCollection(title)}>{title}</span></h2>
        <div className='preview'>
          {products.filter((_, i) => i < 4)
              .map((product)=> <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
  )
}

export default CollectionPreview