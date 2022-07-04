
import { Link } from 'react-router-dom'
import './ItemList.css'


// Como se muestran los items
export default function ItemList({ result }) {
  return (<>
  <div className="row conteiner-fluid my-5 mx-5">
    {result.map(item =>
        (  <div key={item.id} className="card text-center col-sm-10 col-md-3 col-lg-2  m-4 bg-light padding">
            <Link to={`/producto/${item.id}`} style={{ textDecoration: 'none' }} >
              <img src={item.img} onMouseOver={e =>(e.currentTarget.src=item.img2)} onMouseOut={s=>(s.currentTarget.src=item.img)} className="card-img cardPad" alt="..."></img>
              </Link>
            <span className="card-text leter mb-2 mt-3 ">${item.price}</span>
            <span className="leter">Hasta 6 cuotas de ${parseInt(item.price/6)} </span>
            <span><u className='leter'> {item.name}</u></span>
            </div>
          
        ))}
        </div>
    
    </>
  )
}
