import '../pages/home/home.css'

const Footer = () => {
  return (
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p className='text-xl'>Copyright © {new Date().getFullYear()} - All right reserved by <span className='navLogo font-bold'>
        Prod_commerce</span></p>
      </aside>
    </footer>
  )
}

export default Footer