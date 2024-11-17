import React from 'react'
import '../styles/notes.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const Notes = () => {
  return (
    <>
      <div className="input-container">
        <div className="form-container">
          <form action="">
            <div className='title-container'>
              <input type="text" name="titple" id="title" placeholder='Enter the Title' />
            </div>
            <div className="note-container">
              <textarea name="note" id="note" placeholder='Enter the note here...'rows="4" cols="50" maxlength="150"></textarea>
            </div>
            <div className="note-button-container">
              <button type="submit"><AddCircleIcon style={{ fontSize: "50px", color: "#FAB12F" }} /></button>
            </div>
          </form>
        </div>
      </div>
      <div className="note-display-container">
        <div className="note-card">
          <div className="title-diplay">
            <h1>Title</h1>
          </div>
          <div className="note-display">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus impedit consequuntur nobis quo facilis 
              et quibusdam esse blanditiis! Quis maxime molestiae voluptatibus veritatis totam soluta blanditiis magni sequi 
              ducimus expedita?
            </p>
          </div>
          <div className="note-romove">
            <button type="submit"><DeleteRoundedIcon style={{ fontSize: "35px", color: "#808080" }}/></button>
          </div>
        </div>

        <div className="note-card">
          <div className="title-diplay">
            <h1>Title</h1>
          </div>
          <div className="note-display">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus impedit consequuntur nobis quo facilis 
              et quibusdam esse blanditiis! Quis maxime molestiae voluptatibus veritatis totam soluta blanditiis magni sequi 
              ducimus expedita?
            </p>
          </div>
          <div className="note-romove">
            <button type="submit"><DeleteRoundedIcon style={{ fontSize: "35px", color: "#808080" }}/></button>
          </div>
        </div>

        <div className="note-card">
          <div className="title-diplay">
            <h1>Title</h1>
          </div>
          <div className="note-display">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus impedit consequuntur nobis quo facilis 
              et quibusdam esse blanditiis! Quis maxime molestiae voluptatibus veritatis totam soluta blanditiis magni sequi 
              ducimus expedita?
            </p>
          </div>
          <div className="note-romove">
            <button type="submit"><DeleteRoundedIcon style={{ fontSize: "35px", color: "#808080" }}/></button>
          </div>
        </div>

        
        
      </div>
    </>
  )
}

export default Notes