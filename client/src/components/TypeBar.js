import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';

const TypeBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <ListGroup>
            {device.types.map(item=>{
                <ListGroup.Item
                    style={{cursor:'pointer'}}
                    active={item.id === device.setSelectedType.id}
                    onClick={()=>device.setSelectedType(item)} 
                    key={item.id}
                >{item.name}</ListGroup.Item>
            })}
        </ListGroup>
    );
});

export default TypeBar;