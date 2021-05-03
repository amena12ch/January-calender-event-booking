import React, {Component} from 'react'
import {connect} from 'react-redux'

import EventModal from '../Event/EventModal';

import * as actions from "../../store/Calender/CalenderAction"
import * as eventActions from "../../store/Event/EventAction"

class Calender extends Component {

  componentDidMount = () => {
    this.props.getCalender()
    }

  componentDidUpdate = () => {
    const {calender, isModalOpen}= this.props
    if(!calender && !isModalOpen){
        this.props.getCalender()
    }
    }  
     
 openModal = (id) => {
    this.props.openEventModal()  
    this.props.getEvent(id)   
 }

 closeModal = () => {
    this.props.closeEventModal()   
 }
 renderJanuaryCalender = () => {
     const {calender} = this.props
      let weekIndex = 1
      let dayIndex = 0
      let days = [];
      let week = []
   while (weekIndex <= 5 && dayIndex < calender?.length) {
    dayIndex++
    let day =calender[dayIndex-1]
    let style = day.event ? {backgroundColor :day.event.colorCode} :""
    days.push( <td key={day.id} className="table-element" style={style}>
    <span onClick={() => this.openModal(day.id)}>{day.day} </span>  
</td>)
    if( (dayIndex %7 === 0 && dayIndex > 1) || dayIndex > 30){
     week.push(<tr key={weekIndex}>{days}</tr>)
     if(dayIndex < 30){
        days = []
     }
     weekIndex ++
    }
   } 
   return ( <tbody>{week}</tbody>)
  }
    render(){
        const {isModalOpen , eventDetails} = this.props;
        return (
            <div className="container">
                <div className="title">
                January
                </div> 

                <div className="table-responsive-xl">
                  <table className="table table-bordered">
                  <thead>
                      <tr>
                      <th className="table-header">S</th>
                      <th className="table-header">M</th>
                      <th className="table-header">T</th>
                      <th className="table-header">W</th>
                      <th className="table-header">T</th>
                      <th className="table-header">F</th>
                      <th className="table-header">S</th>
                      </tr>
                  </thead>
                      {this.renderJanuaryCalender()}                      
                  </table>

                </div>  
                <EventModal
                 isOpen={isModalOpen}
                 closeModal ={() => this.closeModal()}    
                 eventDetails={eventDetails}     
        />   
            </div>
        );
    }

  }
  const mapStateToProps = state => {
    return {
        isModalOpen: state.calender.isModalOpen,
        calender: state.calender.calender,
        eventDetails : state.event.eventDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        openEventModal :() => dispatch(actions.openEventModal()),
        closeEventModal :() => dispatch(actions.closeEventModal()),
        getCalender :() => dispatch(actions.getCalender()),
        getEvent:(id) => dispatch(eventActions.getEvent(id))

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Calender) ;
  
  
