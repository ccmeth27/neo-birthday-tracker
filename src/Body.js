import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Results from './Results'
import NeoModal from "./NeoModal";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
      results: [],
      loading: false,
      date: ''
    };
  }

  handleDayChange(selectedDay, modifiers, dayPickerInput) {
    const input = dayPickerInput.getInput();
    const date = input.value
    this.setState({ 
      selectedDay : selectedDay,
      loading : true,
      results : [],
      date : date
    })
    this.fetchData(date)
  }
  //Takes the date param and uses it in the fetch call. Object.values gets the first value in the array which is needed because the api call returns a changing date. Took me a little while to figure that one out.
  fetchData = (date) => {
      fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=vKfVrK90rcid8uHqoaOig6WUKcJgqr9RRwFhSYyI`)
      .then(resp => resp.json()
      )
      .then(neoData => {
        let neoObj = Object.values(neoData.near_earth_objects)
          this.setState({
            results: neoObj[0]
          }) 
        })
  }

  

  //Uses react plugin called DayPickerInput to get the date of the user's upcoming birthday or just any day.
  // Passes the returned array to the Results component. 
  render() {
    
    const { selectedDay } = this.state;
    
    return (
      <div class="container-md">
        <div class="results-text">
          <p>Results show the Near Earth Objects passing by on that day, a size comparison, and whether your birthday party could be ruined by an NEO. </p>
        </div>
        <div>
          <NeoModal/>
        </div>
        <p class="selected-date">
          {selectedDay && `You chose ${selectedDay.toLocaleDateString()}`}
        </p>
        <div class="date-picker">
          <DayPickerInput
            color="black"
            value={selectedDay}
            onDayChange={this.handleDayChange}
            dayPickerProps={{
              selectedDays: selectedDay,
            }}
            />
        </div>
        <div>
          <Results 
          results={this.state.results}
          date={this.state.date}
          key={this.state.results.id}
          />
          
        </div>
      </div>
        );
      }
    }