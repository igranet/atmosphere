import logo from '../assets/atmoslogo.png';
const NavBar = () => {
	const pages = [
		{
			name: 'Home',
		},
		{
			name: 'About',
		},
		{
			name: 'Companies',
		},
	];
	return (
		<div className="w-full flex fixed h-24 z-50 top-0 relative py-24">
			<div className="w-3/4">
				<img className="w-12 rounded-md" src={logo}></img>
			</div>

			<div className="w-1/4 flex border-y-2 border-gray-900 py-3 my-auto space-x-6">
				{pages.map((key, idx) => {
					return <div className="mx-auto my-auto">{key?.name}</div>;
				})}
				<button className="bg-gray-900 rounded-md px-2 py-2 text-gray-50 ml-2">
					Contact
				</button>
			</div>
		</div>
	);
};
export default NavBar;
