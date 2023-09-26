import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='d-flex flex-column align-items-center mt-4 p-5 mb-4 bg-danger text-light rounded'>
			<h1 className='text-center'>Errore! La pagina richesta non esiste!</h1>
			<br></br>
			<Button variant="secondary">
				<Link className='text-light' to="/">Torna alla Home</Link>
			</Button>
		</div>
	);
};

export default NotFound;
