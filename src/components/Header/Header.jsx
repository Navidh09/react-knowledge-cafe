import profile_pic from "../../assets/images/profile.png";

const Header = () => {
  return (
    <section className="flex justify-between items-center m-4 pb-4 border-b-2">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile_pic} alt="profile picture" />
    </section>
  );
};

export default Header;
