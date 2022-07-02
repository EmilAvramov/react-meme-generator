import trollFace from '../img/Troll Face.png';

export default function Header() {
	return (
		<header className='header'>
			<img src={trollFace} alt='troll-face' />
			<h1>Meme Generator</h1>
			<p>React Course Project</p>
		</header>
	);
}
