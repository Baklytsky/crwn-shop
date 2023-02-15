import Directory from "../../components/directory/directory.component";
import {useContext} from "react";
import {CollectionsContext} from "../../context/collections.context";

const Home = () => {
  const { collections } = useContext(CollectionsContext)
  return <Directory collections={collections}/>
}

export default Home