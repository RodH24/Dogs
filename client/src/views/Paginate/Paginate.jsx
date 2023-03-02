import React from "react";

const Paginate = (characterPerPage, allCharacters, paginate) =>{
    const pageNumbers= []

    for (let i=0; i<Math.ceil(allCharacters/characterPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className='Paginado'>
                { pageNumbers &&
                pageNumbers.map(number =>(
                    <li className='number' key={number}>
                        <a onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Paginate;