type HeaderProps = {
  title: string;
  subTitle: string;
};
const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <div className="my-12">
      <p className="text-center text-[#7C3FFF] text-2xl uppercase">{title}</p>
      <hr className="w-4/12  mx-auto my-4" />
      <h1 className="text-center text-4xl text-[#000000] font-bold uppercase">
        {subTitle}
      </h1>
      <hr className="w-4/12  mx-auto my-4" />
    </div>
  );
};

export default Header;
