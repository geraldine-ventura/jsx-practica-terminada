import React, {Fragment, useState} from 'react'

const Formulario= ()=>{
  const [datos, setDatos]= useState({
    nombre:""
    apellido: ""

  })


     return (
      <Fragment>
        <h1>Formulario</h1>
         <form className='row'>

         <div className='col-md-3'>
          <input 
            placeholder='ingrese nombre'
            className= "form-control"
            type= "texto"
            name="nombre">
          </input>
         </div> 

         <div className='col-md-3'>
          <input
            placeholder='ingrese apellido'
            className= "form-control"
            type= "texto"
            name="apellido">
          </input>
         </div>

         <div className='col-md-3'>
          <button className="btn btn-primary" type='submit'>Enviar</button>
           </div>
        </form>
        </Fragment>
      );
}
 
export default Formulario;