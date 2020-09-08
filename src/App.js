import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",

      isVegan: false,
      isKosher: false,
      isLactoseFree: true
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }
  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <br />
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
              checked={this.state.gender === "male"}
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
              checked={this.state.gender === "female"}
            />
            Female
          </label>
          <br />
          <br />

          <select
            value={this.state.destination}
            name="destination"
            onChange={this.handleChange}
          >
            <option value="">--Select a destination---</option>
            <option value="Germany">Germany</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="Norway">Norway</option>
          </select>
          <br />
          <br />

          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />
            Vegan?
          </label>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            />
            Kosher?
          </label>
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            />
            Lactose Free?
          </label>

          <br />
          <br />

          <button>Submit</button>
        </form>
        <hr />

        <h2>Entered Info:</h2>
        <p>
          Your Name:{this.state.firstName} {this.state.lastName}
        </p>
        <p>Your Age:{this.state.age}</p>

        <p>Your Gender:{this.state.gender}</p>

        <p>Your destination:{this.state.destination}</p>
        <p>
          Your dietary Resrtiction:---- 
          </p>
          <p>Vegan:
          {this.state.isVegan ? "Yes" : "No"}</p>
         <p>Kosher:{this.state.isKosher ? "Yes" : "No"}</p>
         <p>Lactose Free:{this.state.isLactoseFree ? "Yes" : "No"}
        </p>
      </div>
    );
  }
}
