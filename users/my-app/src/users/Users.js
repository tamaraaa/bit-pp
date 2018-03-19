import React from 'react';

export const Users = (props) => {
    const { dataUser } = props
  
    const getDate = (date) => {
        const myDate = new Date(date)
        const year = myDate.getFullYear();
        const month = myDate.getMonth();
        const day = myDate.getDate()
        return (`${day}-${month}-${year}`)
    }
  
    return (
        <div>
            <li className="collection-item avatar">
                <img src={dataUser.picture.thumbnail} alt="" className="circle" />
                <span className="title">{`name: ${dataUser.name.first}`}</span>
                <p>{`email: ${dataUser.email}`} <br />
                    {`date of birth: ${getDate(dataUser.dob)}`}
                </p>
            </li>
        </div>
    )
  }
  