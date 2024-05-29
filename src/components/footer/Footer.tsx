import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
 
  

  return (
    <>
        <section  className="flex justify-center bg-indigo-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Projeto Feito por André | Copyright: </p>
            <p className='text-lg'>Acesse minhas redes sociais</p>
            <div className='flex gap-2'>
            <a href="https://www.linkedin.com/in/andrenas95/" target="_blank"><LinkedinLogo size={48} weight='bold' /></a>
            <a href="https://www.instagram.com/andrenas.nascimento95/" target="_blank"><InstagramLogo size={48} weight='bold' /></a>
            <a href="https://github.com/andrenas95" target="_blank"><GithubLogo size={48} weight='bold' /></a> 
          </div>
          </div>
      </section>
    </>
  )
}

export default Footer;