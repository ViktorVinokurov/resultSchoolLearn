import clases from './input.module.css';
import { forwardRef } from 'react';
const MInput = forwardRef(({ name, label, value, onChange, onBlur }, ref) => {
	return (
		<div className={`${clases.controller} ${!!value && clases.active}`}>
			<label htmlFor={name} className={clases.label}>
				{label}
			</label>
			<input type="text" ref={ref} name={name} className={clases.input} onChange={onChange} />
		</div>
	);
});
export default MInput;