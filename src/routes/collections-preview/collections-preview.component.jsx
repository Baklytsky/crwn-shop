import {Fragment, useContext} from "react";
import {CollectionsContext} from '../../context/collections.context'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectionsPreview = () => {
  const {collections} = useContext(CollectionsContext)
  return (
      <Fragment>
        {Object.keys(collections).map((title) => {
              const products = collections[title]
              return <CollectionPreview key={title} title={title} products={products}/>
            }
        )}
      </Fragment>
  );
}

export default CollectionsPreview