import React from "react";
import im1 from './img/1.gif'
import im2 from './img/2.gif'
import im3 from './img/3.gif'
import loading from './img/load.gif'
import s from './loading.module.css'

const Loading = () => {
  const array = [im1, im2, im3];
  const aleatorio = () => {
    let aux = Math.floor(Math.random() * 3);;
    return array[aux];
  }

  return(
    <div className={s.container}>
      <div className={s.imCont}>
      <img src={aleatorio()} alt="Loading..." />
      </div>
      <img src={loading} className={s.leaf} alt="aa" />
    </div>
  )
}

export default Loading;