import { useState } from 'react';
import BaseLayout from './layouts/BaseLayout';
import Auth from './components/Auth/form'
const App = () => {
	const [auth, setAuth] = useState(false)
	return (
	<div className='flex h-full w-full'>
		{auth ? <BaseLayout /> : <Auth />}
	</div>
	)
};

export default App