import { useState } from 'react';
import { memes } from '../memesData';

export default function Form() {
	const [mime, setMime] = useState({
		top: '',
		bottom: '',
		img: '',
	});

	function getMimeData() {
		const [topContent, bottomContent] = document.querySelectorAll('input');
		const random = parseInt(Math.random() * 100);
		const img = memes.data.memes[random].url;

		setMime({
			top: topContent.value,
			bottom: bottomContent.value,
			img: img,
		});
	}

	return (
		<main>
			<form className='form' action=''>
				<div className='form__container'>
					<label htmlFor='top'>Top Meme Text</label>
					<label htmlFor='bottom'>Bottom Meme Text</label>
					<input
						type='text'
						name='top'
						id='form__input-top'
						placeholder='Enter text...'
					/>
					<input
						type='text'
						name='bottom'
						id='form__input-bottom'
						placeholder='Enter text...'
					/>
				</div>

				<button
					onClick={(e) => {
						e.preventDefault();
						getMimeData();
					}}
					type='submit'
				>
					Get a new meme image 🖼
				</button>
			</form>
			<div className='mime-img'>
				<img src={mime.img} alt='' />
			</div>
		</main>
	);
}
