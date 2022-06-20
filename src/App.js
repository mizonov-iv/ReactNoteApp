import React from "react";
import {useEffect, useState} from "react";

function App() {

    const [item, setItem] = useState('')
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || []
    )

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const addNewItem = () => {
        if(item.trim !== '') {
            const newItem = {
                id: Date.now(),
                item: item,
            }
            setItems((items) => [...items, newItem])
            setItem('')
        } else {
            alert('Enter something')
            setItem('')
        }
    }

    const deleteNote = (id) => {
        setItems(items.filter((item) => item.id !== id))
    }

  return (
      <div>
          <nav className='navbar navbar-dark navbar-expand-lg bg-dark p-3'>
              <div className="navbar-brand">
                  Note App
              </div>
          </nav>
          <form className='container p-5 mt-5'>
              <div className="form-group mb-3 w-75 d-flex mx-auto">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Write your note"
                      onChange={(e) => setItem(e.target.value)}
                  />
                  <button className="btn btn-dark ms-2" onClick={addNewItem}>Add</button>
              </div>
              <ul className="list-group w-75 mt-4 mx-auto">
                  {items.map(item => (
                      <li
                          className="list-group-item note"
                          key={item.id}
                      >{item.item}
                          <button
                              type="button"
                              className="btn btn-outline-dark btn-sm"
                              onClick={() => deleteNote(item.id)}
                          >
                              &times;
                          </button>
                      </li>
                  ))}
              </ul>
          </form>
      </div>
  );
}

export default App;
