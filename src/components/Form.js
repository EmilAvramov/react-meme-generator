export default function Form() {
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

				<button type='submit'>Get a new meme image 🖼</button>
			</form>
		</main>
	);
}
