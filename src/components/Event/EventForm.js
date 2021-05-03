import React , {useState} from 'react';
import {useDispatch} from 'react-redux'

import * as eventActions from "../../store/Event/EventAction"
import * as actions from "../../store/Calender/CalenderAction"
 

const EventForm = (props) => {
  const dispatch = useDispatch();
  const {eventDetails} = props 
  const [title, setTitle] = useState(eventDetails?.event?.title || '');
  const [color, setColor] = useState(eventDetails?.event?.color);
  const  colors = [
    {
    code: '#FF5252',
    name: 'red'
    },
    {
    code: '#E040FB',
    name: 'purple'
    },
    {
    code: '#FF6E40',
    name: 'orange'
    },
    {
    code: '#CDDC39',
    name: 'lime'
    },
    {
    code: '#0097A7',
    name: 'cyan'
    }
   ]
  const handleSelectChange = (e)=>{
  setColor(e.target.value)
  }
  const handleTitleChange = (e)=>{
    setTitle(e.target.value)
    }
  
  const submitCreateEvent = (e) =>{
  e.preventDefault();
  const colorCode = colors?.filter(e =>e.name === color)
  
  let payload = {  
      id: eventDetails.id,
      day: eventDetails.day,
      event: {
        title:title,
        color: color,
        colorCode: colorCode[0]?.code
      } 
  }
   dispatch(eventActions.createEvent(payload, eventDetails.id ))  
   dispatch(actions.closeEventModal())  
   dispatch(actions.getCalender()) 

  }
  const deleteEvent = (e) =>{
    e.preventDefault();
    
    let payload = {  
        id: eventDetails.id,
        day: eventDetails.day,
        event: {
        } 
    }
     dispatch(eventActions.createEvent(payload, eventDetails.id ))  
     dispatch(actions.closeEventModal()) 
     dispatch(actions.getCalender()) 
    }
  const eventExists = !!eventDetails?.event?.title;
  return (
    <React.Fragment>
    <div className="row">
            <div className="column">
            {!eventExists &&  <label className="form-title">{eventDetails.day} January: Create Event</label>}
            {eventExists &&  <label className="form-title">{eventDetails.day} January: Event</label>}
              </div></div>
      {!eventExists && 
        <form onSubmit={submitCreateEvent}>
        <div>
          <div className="row">
            <div className="column">
              <label htmlFor="title">Title :</label>
              <input
                type="text"
                placeholder="Write your event title"
                id="title"
                value={title}
                onChange={handleTitleChange}
                required
              />

            </div>
            </div>
            <div className="row">            
            <div className="column">
              <label>Color :</label>
              <select onChange={handleSelectChange}>
                <option value="">Choose a color </option>
              {colors.map((color, index) => {
                    return (<option key={index} value={color.name}>{color.name}</option> )
                    })} 
              </select>
              
            </div>
          </div>

          <div className="row">
            <div className="column column-50">
              <input
                className="button-primary"
                type="submit"
                value="Create"
              />
            </div>
          </div>
      </div>
    </form>}
{eventExists && 
  <form onSubmit={deleteEvent}>
<div>
          <div className="row">
            <div className="column">
              <label htmlFor="title"><strong>Title : </strong> {eventDetails.event.title}</label>
              </div>
            
              </div>
              </div>
           <div className="row">
            <div className="column">
              <input
                className="button-primary"
                type="submit"
                value="Delete"
              />
            </div>
          </div>
              </form>
              
}
</React.Fragment>
  );
};

export default EventForm;
