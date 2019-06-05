import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // const { robots } = props;
    return ( 
      <div>
        {
          robots.map((card, index) => {
            return (
            <Card 
              key = {index}
              id = {robots[index].id}
              name = {robots[index].name}
              email = {robots[index].email}
            />)
          })
        }
      </div>
    );
}
export default CardList;