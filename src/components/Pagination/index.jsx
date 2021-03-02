import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onChangePage: PropTypes.func,
};

Pagination.defaultProps = {
    onChangePage: null,
}


function Pagination(props) {
    const {pagination,onChangePage} = props;
    const {_page,_limit,_totalRows} = pagination;

    const totalPages = Math.ceil(_totalRows / _limit);
    const handleClickButton = (newPage)=>{
        if(onChangePage){
            onChangePage(newPage);
        }
    }

    return (
       <div>
           <button
                disabled={_page<=1}
                onClick={()=>handleClickButton(_page-1)}
           >
               Prev
           </button>
           <button
                disabled={_page>=totalPages}
                onClick={()=>handleClickButton(_page+1)}
           >
               Next
           </button>
       </div>
    );
}

export default Pagination;