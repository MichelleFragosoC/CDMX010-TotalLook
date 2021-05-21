/* eslint-disable jsx-a11y/anchor-has-content */
import hotSale from '../../assets/hotsale.jpg';
import ropa from '../../assets/ropa.png';
import zapatos from '../../assets/zapatos.png';
import bolsas from '../../assets/bolsas.png';
import promotionsOne from '../../assets/promoOne.png';
import promotionsTwo from '../../assets/promoTwo.png';
import promotionsThree from '../../assets/promoThree.png';

import './Principal.css';

const Principal = () => {
    return (
        <div className='principal'>
            <h2>Ver promociones</h2>
            <img src={hotSale} className="hotSale" alt="oferta" />
            <div className="carousel-wrapper">
                <span id="item-1"></span>
                <span id="item-2"></span>
                <span id="item-3"></span>
                <div className="carousel-item item-1">
                    <a className="arrow arrow-prev" href="#item-3"></a>
                    <img src={promotionsOne} className="promotionsOne" alt="promotionsOne" />
                    <a className="arrow arrow-next" href="#item-2"></a>
                </div>

                <div className="carousel-item item-2">
                    <a className="arrow arrow-prev" href="#item-1"></a>
                    <img src={promotionsTwo} className="promotionsTwo" alt="promotionsTwo" />
                    <a className="arrow arrow-next" href="#item-3"></a>
                </div>

                <div className="carousel-item item-3">
                    <a className="arrow arrow-prev" href="#item-2"></a>
                    <img src={promotionsThree} className="promotionsThree" alt="promotionsThree" />
                    <a className="arrow arrow-next" href="#item-1"></a>
                </div>
            </div>
            <h2>Ver todo</h2>
            <div className='categories'>
                <img src={ropa} className="categorie" alt="Ropa" />
                <img src={zapatos} className="categorie" alt="Zapatos" />
                <img src={bolsas} className="categorie" alt="Bolsas" />
            </div>
        </div>
    )
}

export default Principal;