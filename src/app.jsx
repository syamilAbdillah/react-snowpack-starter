import React,{ useState, useEffect} from 'react';

function App (){
	//create the count state
	const [count, setCount] = useState(0);
	//create the counter 
	useEffect(()=>{
		const cb = () => setCount(count + 1);
		const timer = setTimeout(cb, 1000);
		return () => clearTimeout(timer);
	},[count, setCount]);

	//return component
	return(
		<div className="App">
			<header className="App-header">
				<p>
					page has beeen oper for <code>{count}</code> seconds.
				</p>
			</header>
		</div>
	);
}

export default App;