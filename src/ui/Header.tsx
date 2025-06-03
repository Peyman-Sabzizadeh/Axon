function Header() {
  return (
    <div className="flex items-center justify-between rounded-lg bg-violet-200 p-2">
      <div className="flex items-center justify-center gap-6">
        <img className="w-16" src="/Logo.png" alt="Logo" />
        <div className="flex flex-col">
          <h2 className="font-nunito-bold text-lg">Axon</h2>
          <h5 className="font-nunito-regular text-sm">
            Modern user managment dashboard
          </h5>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center gap-4">
        <img className="h-14 w-14" src="/User.png" alt="Default user image" />
        <h3 className="font-nunito-bold text-sm">Nameeee</h3>
      </div>
    </div>
  );
}
export default Header;
