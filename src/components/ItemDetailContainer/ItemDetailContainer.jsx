import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getProductById} from '../../utils/fetchData';
import { Spinner } from '../spinner/Spinner';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getProductById(id)
          .then((res) => {
            setProduct(res);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });

    },[id])

    return (
      <main>
          <div>ItemDetailContainer</div>
          { loading 
            ? <Spinner /> 
            : <ItemDetail {...product}  />}
            {/* : <ItemDetail id={product.id} name={product.name} description={description} />} */}
      </main>
    )
}

export default ItemDetailContainer;

//   {
//     id: 1,
//     name: "Bulbasaur",
//     description:
//       "Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth.",
//     price: 100,
//     stock: 10,
//     category: ["grass"],
//     image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
//   }