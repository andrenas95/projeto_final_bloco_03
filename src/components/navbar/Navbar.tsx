import { ShoppingCart, User } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function NavBar(){


   return (
    <>
        <div className='flex justify-between flex-row w-full bg-indigo-900 py-2 px-20 text-white font-bold text-2xl'>
            <div>
               <Link className='text-4xl flex items-center gap-4' to='/home'><img className='w-1/5'  src="https://ik.imagekit.io/6ag85zqtd/Farmacia%20da%20Leste/farmacia%20icone.png?updatedAt=1716987542003" alt="Farmacia" /><h1>Farmácia 
                  <br></br>Santista<br></br></h1></Link>  
            </div>
            <div className='flex gap-x-5 items-center'>
               <Link to='/categorias'>Categorias</Link>
               <Link to='/cadastrarcategoria'>Cadastrar Categoria</Link>
               <User size={32} color="#f9ecec" />
               <ShoppingCart size={32} color="#f9ecec" />

            </div>
         </div>
    </>
   )
   
}

export default NavBar;