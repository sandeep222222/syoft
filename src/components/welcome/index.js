import "./index.css"

const Welcome = ()=>{
    return(
        <div className='text-side'>
        <h1 className='welcome'>Welcome to <br/> our community</h1>
        <p className='para'>Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
        <div className='img-text'>
          <img src='https://res.cloudinary.com/dwwunc51b/image/upload/v1720155902/account_img_fqrhnd.jpg' alt='profile' className='img'/>
          <img src='https://res.cloudinary.com/dwwunc51b/image/upload/v1717999130/Owen_Lars_c8zaap.jpg' alt='profile' className='img'/>
          <img src='https://res.cloudinary.com/dwwunc51b/image/upload/v1717999130/Obi-Wan_Kenobi_yc3sdu.jpg' alt='profile' className='img'/>
          <img src='https://res.cloudinary.com/dwwunc51b/image/upload/v1717999129/Beru_WhiteSun_lars_ui9rxk.jpg' alt='profile' className='img'/>
          <p className='paras'>More than 17k people joined us, it's your turn</p>
        </div>
    </div>
    )
}

export default Welcome