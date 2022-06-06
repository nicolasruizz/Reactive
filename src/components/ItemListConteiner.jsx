

import { useEffect, useState } from 'react';
import ItemList from './ItemList';



export default function ItemListConteiner({lista, saludar}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    const items = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          { img: "https://cdn.shopify.com/s/files/1/0613/2364/1040/products/H5cf967f7aada49258982bff44ca39880r_f7ca194a-abf7-4be9-b672-e79a78aacbbf.jpg?v=1647031020", price: 150, detalle: "Lorem ipsum dolor sit amet cxzczxcxzonsec" },
          { img: "https://sc04.alicdn.com/kf/Hc397036dc5224ab6a8c1d42c4f09a51fT.jpg", price: 500 , detalle: "Lorem ipsum dolor sit amet consexzcxzcxzcc" },
          { img: "https://m.media-amazon.com/images/I/61CFEH18Q5L._AC_UX569_.jpg", price: 750, detalle: "Lorem ipsum dolor sit amezxcxzczxt consec" },
          { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkksCEyiaSSHtsjoD6-Te13vRdDckoNymi9rZ6YeMT_9zPIsRj_uLHpQH7LlUgmI6xgE&usqp=CAU", price: 640,detalle: "Lorem ipsum dolor sit amet consezxcxzcxzc" },
          { img: "https://img.ltwebstatic.com/images2_pi/2019/06/10/15601365772575839273_thumbnail_220x293.webp", price: 354,detalle: "Lorem ipsum dolor sit amet consecsadsadsadas" },
        ]);
        
      }, 2000);
    });

    items
      .then((result) => {
        setResultado(result);
      })
      .catch((error) => {
        setError(true);
        ;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);






  return (
      <>
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Hubo un error al cartar el catalogo'}</div>
      <div>{resultado && <>

      
    <ItemList result= {resultado} /></>}</div>
    </>
  )
}
