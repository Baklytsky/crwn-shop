import '../category-item/category-item.styles.scss'

const CategoryItem = ({category}) => {
  const {title, imageUrl} = category
  return (
      <div className='category-container'>
        <div className='background-image' style={{
          background: `url(${imageUrl})`
        }}></div>
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
  )
}

export default CategoryItem