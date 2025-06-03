function Header() {
  return (
    <div className="flex items-center justify-between rounded-lg bg-violet-200 p-2">
      <div className="flex items-center justify-center gap-6">
        <img className="w-28" src="/Logo.png" alt="Logo" />
        <div className="flex flex-col gap-1">
          <h2 className="font-nunito-bold text-xl">Axon</h2>
          <h5 className="font-nunito-regular text-lg">
            Modern user managment dashboard
          </h5>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center gap-4">
        <img className="h-20 w-20" src="/User.png" alt="Default user image" />
        <h3 className="font-nunito-bold text-xl">Nameeee</h3>
      </div>
    </div>
  );
}
export default Header;
