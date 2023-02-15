import CategoryItem from "../category-item/category-item.component";
import '../directory/directory.styles.scss'

const Directory = ({collections}) => {
    return (
        <div className='directory-container'>
            {Object.keys(collections).map((title) => {
                    const products = collections[title]
                    return <CategoryItem key={title} products={products} title={title}/>
                }
            )}
        </div>
    )
}


export default Directory