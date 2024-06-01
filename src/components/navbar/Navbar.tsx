import { MagnifyingGlass, ShoppingCart, User } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function NavBar(){


   return (
    
        <div className='flex justify-between flex-row w-full bg-indigo-900 py-2 px-20 text-white font-bold text-2xl'>
            <div>
               <Link className='text-4xl flex items-center gap-4' to='/home'><img className='w-1/5'  src="https://ik.imagekit.io/6ag85zqtd/Farmacia%20da%20Leste/farmacia%20icone.png?updatedAt=1716987542003" alt="Farmacia" /><h1>Farmácia 
                  <br></br>Santista<br></br></h1></Link>  
            </div>

            <div className="flex-1 flex justify-center items-center relative w-30 text-black">
                        <form>
                            <input className="h-9 w-90 rounded-lg px-4 py-4 focus:outline-none"
                                type="search"
                                placeholder="Pesquisar produto"
                                id="busca"
                                name="busca"
                                required
                            />
                            <button type="submit" className="h-9 w-9 p-2.5 ms-2 text-sm font-medium text-white bg-teal-500 hover:bg-teal-900 rounded-lg border border-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                                <MagnifyingGlass size={14} weight="bold"/>
                            </button>
                        </form>
                    </div>
                            
            <div className='flex gap-x-5 items-center'>
               <Link to='/categorias'>Categorias</Link>
               <Link to='/cadastrarcategoria'>Cadastrar Categoria</Link>
               <User size={32} color="#f9ecec" />
               <ShoppingCart size={32} color="#f9ecec" />
              </div>
            </div>
         
    
   )
   
}

export default NavBar;