import { TbSearch } from "react-icons/tb";
import { FaPlusCircle } from "react-icons/fa";
import NoteItem from '../components/NoteItem'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { MdClose } from "react-icons/md";

function Notes({ notes }) {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('')
  const [filteredNotes, setFilteredNotes] = useState(notes)

  const handleSearch = () => {
    setFilteredNotes(notes.filter(note => {
      if (note.title.toLowerCase().match(text.toLowerCase())) {
        return note;
      }
    }))
  }

  useEffect(handleSearch, [text])

  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type="text" autoFocus value={text} onChange={(e) => { setText(e.target.value); handleSearch(); }} placeholder="write a note..." />}

        <button className="btn" onClick={() => setShowSearch(prevState => !prevState)}>
          {showSearch ? <MdClose /> : <TbSearch />}
        </button>
      </header>
      <div className="notes__container">
        {
          filteredNotes.length == 0 && <p className="empty__notes">No notes found.</p>
        }
        {
          filteredNotes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))
        }
      </div>
      <Link to='/create-note' className="btn add__btn"><FaPlusCircle /></Link>
    </section>
  )
}

export default Notes