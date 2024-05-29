import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia</div>

            <div className='flex gap-4'>

            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastrartema" className="hover:underline">
              Cadastrar Categoria
            </Link>
            <Link to="/" className="hover:underline">
              Perfil
            </Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar