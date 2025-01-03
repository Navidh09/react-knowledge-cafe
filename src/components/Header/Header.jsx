import profile_pic from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto m-4 pb-4 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile_pic} alt="profile picture" />
        </div>
    );
};

export default Header;