import { useState } from 'react'
import { ArrayData } from './ArrayData'

const Array = () => {

const [people, setPeople] = useState(ArrayData);

const removeItems = (id) => {
    const deletePeople = people.filter((people) => people.id !== id);
    setPeople(deletePeople)
}

  return (
    <div>
        <h6>Ass 2</h6>
        {people.map((person) => {
        const {id, name} = person;
        return(
            <div key={id} className='item'>
                <h4>{name}</h4>
                <button onClick={() => removeItems(id)}>remove items</button>
            </div>
      )}
        )}
    </div>
  )
}

export default Array



