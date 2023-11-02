import './end.css'
import imageHome1 from '../../assets/imagem-1.png'

import { Link } from 'react-router-dom';

function End() {

  return (
    <>
      <div>
        <div className='div-flex'>
          <div className='div-home-head-info margin-div margin-left'>
            <div className='text-align font-size-title'>
              <span className='font-color'>Parabéns</span>             
            </div>
            <div className='text-align font-size-title-2'>
              <br /><span className='font-color-3'>
              Você esta mais perto de ter o seu visto, em breve entraremos em contato para trazer novidades!
              </span>
            </div>
            <div className='padding-button-end'>
              <Link to="/">
                <button type='button' className='button-style-end'>
                  <span className='font-button'>Voltar para a home</span>
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img src={imageHome1} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default End
