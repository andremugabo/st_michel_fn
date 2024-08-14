import img1 from '../../assets/1.jpg'
export const WelcomeMsg: React.FC = () => {
    return (
        <div className='p-4'>
            <h2>Welcome to our Parish</h2>
            <div className='flex bg-custom-blue'>
                <div className=""><img src={img1} width={'100px'} height={'200px'} alt="" /></div>
                <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quidem eum illo earum error optio! Excepturi facilis necessitatibus officia? Sunt molestias sint veniam, asperiores voluptas unde qui quaerat! Blanditiis, vel.</p></div>
            </div>
        </div >
    )
}