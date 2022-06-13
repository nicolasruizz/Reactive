
import { Link } from 'react-router-dom'
import './ItemList.css'


// Como se muestran los items
export default function ItemList({ result }) {
  return (<>
  <div className="row conteiner-fluid my-5 mx-5">
    {result.map(item =>
        (  <div key={item.id} className="card cardPad text-center col-sm-10 col-md-3 col-lg-2 py-2 m-4 bg-dark text-white">
            <Link to={`/producto/${item.id}`} style={{ textDecoration: 'none' }} ><img src={item.img} onMouseOver={e =>(e.currentTarget.src=item.img2)} onMouseOut={s=>(s.currentTarget.src=item.img)} className="card-img" alt="..."></img>
            <span className="card-text text-white">${item.price}</span>
            <p><span className="text-white">Hasta 6 cuotas de ${parseInt(item.price/6)} </span></p>
            <span><i className="text-white"> {item.name}</i></span></Link>
            </div>
          
        ))}
        </div>
    
    </>
  )
}
