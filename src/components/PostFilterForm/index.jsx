import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
    onSubmit: null,
};

function PostFilterForm(props) {
    const {onSubmit} = props;
    const [searchTerm,setSearchTerm] = useState('');
    // useRef() là tạo ra 1 object chứa giá trị và sẽ không bị thay đổi giá trị khi render lại
    const typingTimeoutRef = useRef(null);

    // Sau khi input thay đổi thì onChange lại searchTerm mới tại setSearchTerm
    const handleSearchTermChange = (e) =>{
        const value =  e.target.value;
        setSearchTerm(value); 
        

        if(!onSubmit) return;
        // Kiểm tra thời gian chờ nếu có thì xóa để trở về mặc định 
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        }
        // chờ 1000ms để submit cái nằm trong hàm setTimeout
        typingTimeoutRef.current = setTimeout(() =>{
            // chính là cái lồn này
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);
        },1000);  
    }

    return (
        <form >
            <input type="text" value={searchTerm} onChange={handleSearchTermChange}></input>
        </form>
    );
}

export default PostFilterForm;