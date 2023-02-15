import { Routes, Route } from 'react-router-dom';
import './shop.styles.scss';
import CollectionsPreview from "../collections-preview/collections-preview.component";
import Collection from "../collection/collection.component";

const Shop = () => {
  return (
      <Routes>
        <Route index element={<CollectionsPreview />} />
        <Route path=':collection' element={<Collection />} />
      </Routes>
  );
};

export default Shop;