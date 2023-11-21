import React from "react";
import KitchenSinkExample from "./components/Card";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      fullName : "Akinbowale Kehinde",
      bio: "Once upon a the sky is blue and the birds was allowed to roam free on the sky without wings",
      imgSrc: "https://assets.nst.com.my/images/articles/MLS-SOC-SPO-LEAGUES-CUP-2023-SEMIFINALS_-INTER-MIAMI-CF-V-PHIL_1692317043.jpg",
      profesion: "Software Developer" ,
      shows: false,
      text: "View Profile",
      field: ""
    };

  this.toggleVisibility = this.toggleVisibility.bind(this);
  this.updateField = this.updateField.bind(this);
  }

  toggleVisibility (){
      this.setState(state => {
       return (state.text === "View Profile") ? {text: "Hide Profile"} : {text: "View Profile"}
      });
      this.setState(state => {
        return (state.shows === true) ? {shows : false } : {shows: true}
        });
  }
  updateField(){
    this.setState({
      field: new Date()
    })
  }
  componentDidMount() {
    setInterval(
      () => this.updateField(),
      1000
    );
  }
  render(){
    if(this.state.shows){
      return (
        <>
        <h1 className="display-2 fw-semibold">My Profile Info</h1>
        <KitchenSinkExample data={this.state.fullName} Img={this.state.imgSrc} bio={this.state.bio} 
        profession={this.state.profesion}/>
        <button className="btn btn-primary my-3" onClick={this.toggleVisibility}>{this.state.text}</button>
        <input type="text" className="d-block p-2" value={this.state.field.toLocaleTimeString()}/>
        </>
      );
    }
    else{
      return (
        <>
        <button className="btn btn-primary mx-auto mt-5"  onClick={this.toggleVisibility}>{this.state.text}</button>
        </>
      );
    }
}
}
export default App;