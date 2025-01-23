export function Header() {
  return(
    <>
    <header className='header-con'>
      <img src='https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175109.png?f=webp&w=256' className="image-logo" alt='react-logo'/>

      <nav>
        <ul className='nav-list'>
          <li className='li-list'>Pricing</li>
          <li className='li-list'>About</li>
          <li className='li-list'>Contact</li>
        </ul>

      </nav>
      
    </header>
    </>
  );
}