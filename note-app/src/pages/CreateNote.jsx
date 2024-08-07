/* eslint-disable react/prop-types */
import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"
import useCreateDate from "../components/useCreateDate"

function CreateNote({ setNotes }) {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const date = useCreateDate()
   const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = { id: uuid(), title, details, date }
      //add this note to the note array
      setNotes(prevNotes => [note, ...prevNotes])
      //redirect to home page
      navigate('/')
    }
  }
  return (
    <section>
      <header className="create-note__header">
        <Link to='/' className="btn"><BiArrowBack /></Link>
        <button className="btn lg primary" onClick={handleSubmit}>Save</button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} autoFocus />
        <textarea rows='28' placeholder="Note details" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default CreateNote