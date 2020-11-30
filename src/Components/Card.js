import React, { useState } from 'react'
import '../Css/sidebar.css'
import {Link} from 'react-router-dom'


const Card =({imagen, clase,texto})=>(
<div  className={clase}>
        <div>
        <img className="imagen" src={imagen}/>
        <hr/>
    </div>  
    <div>
<h3><Link to="/">{texto}</Link></h3>
    </div>
    </div>
)

export default Card