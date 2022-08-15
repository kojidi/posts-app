import './Header.scss';

const Header = ({text}) => {
  return (
    <header className="header">
        <div className='container'>
            <h1 className="text" >
                {text}
            </h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: "BLOG POSTS",
}

export default Header