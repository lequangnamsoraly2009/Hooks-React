import React,{useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [value,setValue] = useState('');
    const handleChangeValue = (e)=>{
        setValue(e.target.value);
        // console.log(e.target.value);
    }

    const handleSubmit = (e) =>{
        //Prevent reloading browser when we are enter or submit input
        e.preventDefault();
        if(!onSubmit) return;
        // Check space in front
        // if(value === ' ') return;
        // If we have func onSubmit then return 1 object contain(chứa) values.
        const formValues = {
            title: value,
        };
        onSubmit(formValues);
        // Reset value in the form when we import values.
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" value={value} onChange={handleChangeValue} ></input>
        </form>
    );
}

export default TodoForm;