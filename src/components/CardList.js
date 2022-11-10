import React from "react";

import Card from './Card.js';

const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error('Nooooooooo!');
    // }
    return(
        <div>
            {
                robots.map(
                    (user,i) => {
                        return (
                        <Card key = {i} 
                        id={user.id} 
                        name = {user.name} 
                        email = {user.email}
                        />
                        );
                    }
                )
            }
        </div>
    );
}

export default CardList;