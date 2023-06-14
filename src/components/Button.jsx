import './Button.css';

export default function Button(props)  {
	const { title, type } = props;
return  (
	<div>
        <button className='button-component' type={props.type}>{title}</button>
	</div>
	);
}