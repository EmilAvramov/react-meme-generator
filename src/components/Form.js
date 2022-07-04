import { useState, useEffect } from 'react';
import getRequest from './../services/api';

export default function Form() {
	const [data, setData] = useState([]);

	useEffect(() => {
		getRequest().then((res) => setData(res.data.memes));
	}, []);

	const [mime, setMime] = useState({
		top: '',
		bottom: '',
		img: '',
	});

	function handler(e) {
		const { name, value } = e.target;
		setMime((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}

	function submitForm(e) {
		e.preventDefault();
		const random = parseInt(Math.random() * 100);
		const img = data[random].url;
		setMime((prevData) => ({
			...prevData,
			img: img,
		}));
	}

	return (
		<main>
			<form onSubmit={submitForm} className='form'>
				<div className='form__container'>
					<label htmlFor='top'>Top Meme Text</label>
					<label htmlFor='bottom'>Bottom Meme Text</label>
					<input
						type='text'
						name='top'
						id='form__input-top'
						placeholder='Enter text...'
						value={mime.top}
						onChange={handler}
					/>
					<input
						type='text'
						name='bottom'
						id='form__input-bottom'
						placeholder='Enter text...'
						value={mime.bottom}
						onChange={handler}
					/>
				</div>

				<button type='submit'>Get a new meme image 🖼</button>
			</form>
			<div className='mime-img'>
				<img src={mime.img} alt='' />
				<h2 className='mime-img__top'>{mime.top}</h2>
				<h2 className='mime-img__bottom'>{mime.bottom}</h2>
			</div>
		</main>
	);
}
