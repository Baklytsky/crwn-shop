import {createContext, useEffect, useState} from "react";

// import {addCollectionAndDocuments} from '../utils/firebase/firebase'
import {getCategoriesAndDocuments} from '../utils/firebase/firebase'
// import SHOP_DATA from '../shop-data.js';

export const CollectionsContext = createContext({
  collections: {},
  setCollections: () => null
});

export const CollectionsProvider = ({children}) => {
  const [collections, setCollections] = useState({})

  // useEffect(() => {
  //   addCollectionAndDocuments('collections', SHOP_DATA)
  // }, [])

  useEffect(() => {
    const getCollectionsMap = async () => {
      const collectionsMap = await getCategoriesAndDocuments('collections')
      setCollections(collectionsMap)
    }
    getCollectionsMap()
  }, []);

  const value = { collections }

  return (
      <CollectionsContext.Provider value={value}>
        {children}
      </CollectionsContext.Provider>
  )
}

export default CollectionsProvider