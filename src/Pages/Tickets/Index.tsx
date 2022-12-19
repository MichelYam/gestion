import React, { useState } from 'react'
import { ticketMockData } from '../../data/ticketsData'
import './Style.css'
import Table from '../../Components/Table/index'
import { Modal } from '../../Components/Modal'
import Form from '../../Components/Form'


const example = [
  {
    label: "title",
    value: "title"
  },
  {
    label: "assignee",
    value: "assignee"
  },
  {
    label: "priority",
    value: "priority"
  },
  {
    label: "date",
    value: "date"
  }
]
const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {

  }

  return (
    <>
      <div className='header'>
        <h1>Tickets d'incident</h1>
        <button className='btn-create' onClick={() => { setIsOpen(true) }}>Create a new issue</button>
      </div>
      <Table data={ticketMockData} columns={example}></Table>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Create a new issue</h2>
        <form >
          <div className='form-group'>
            <label htmlFor="title">Title</label>
            <input className='form-control' type="text" id='title' onChange={handleChange} required />
          </div>
          <div className='form-group'>
            <label htmlFor="title">Description</label>
            <textarea className='form-control' name="description" id="description" />
          </div>
          <div className='row'>
            <div className='form-group col'>
              <label htmlFor="priority">Priority</label>
              <select className='form-control' name="priority" id="priority">
                <option value="weak">weak</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </div>
            <div className='form-group col'>
              <label htmlFor="date">DeadLine</label>
              <input className='form-control' type="date" id='date' required />
            </div>
          </div>
          <div className='create'>
            <button type="submit" className='btn-create'>Create issue</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default Index