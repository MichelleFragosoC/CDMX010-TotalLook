//LISTA DE PROMOCIONES
//-Debe mostrar todas las promociones existentes sin paginación.
//-Deberá de cumplir con el condicional para ocultar los botones 
// de editar y eliminar promociones  y aparecerá el carrito de compras 

import Rect from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './Promotions.css';

function Promotions(props) {
    return (
        return (
            <div>
                <Product
                    key={p.id}
                    name={p.name}
                    picture={p.img}
                    price={p.price}
                    status={p.status}
                    onSaveProduct={() => props.onSaveProduct(p.id)}
                    onIncrementProduct={() => props.onIncrementProduct(p.id)}
                    onRemoveProduct={() => props.onRemoveProduct(p.id)}
                />
            </div>
        )
        })}
    
}

export default Promotions
