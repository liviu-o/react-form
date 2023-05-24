import { useState } from "react";
import './Dropdown.css';

export default function Dropdown(props)  {
	const [selectedOption, setSelectedOption] = useState('');
    const { data } = props;

	const  handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
	};

return  (
	<div className="py-2">
		<label>
			Select an option:
            <select className="select-item" value={selectedOption} onChange={handleDropdownChange}>
                {(data).map((p) => (	
                    <option key={p.value} value={p.value}>{p.name}</option>
                ))}
            </select>
		</label>
	</div>
	);
}
