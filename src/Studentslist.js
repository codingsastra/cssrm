import React, { Component } from 'react'


class Studentslist extends Component {

  constructor(props){
    super(props);
    this.state={
      basic:[],
      isLoaded:false
    }
    this.getBasic = this.getBasic.bind(this);
  }

  componentWillMount(){
    this.getBasic();
  }

  getBasic(){
    return fetch(`/api/basic`,{
       method: 'get',
       headers: {
         'Authorization': 'Basic '+btoa('cssrm:cssrm'),
         'Content-Type': 'application/x-www-form-urlencoded'
       }})
    .then(function(response){
      response.json().then(function(data) {
        this.setState({basic:data,isLoaded:true})
      }.bind(this))
    }.bind(this))
    .catch(function(error){
      console.log("error")
      return "[]";
    });
  };

  render(){

    if(this.state.isLoaded) {
      return(
          <div>

            <div className="page-header">
              
              <a href="/basic" className="btn btn-success btn-lg"><span className="glyphicon glyphicon-plus"></span> New Registration</a>
            </div>
            <table className="table">
              <thead>
              <h3>Students List</h3>
                <tr>


                  <th>StudentName</th>
                  <th>JoiningDate</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.basic.map((basic, index) => (
                    <BasicRow _id={basic._id}

                                StudentName={basic.StudentName}
                                Course={basic.Course}
                                  />
                ))}
              </tbody>
            </table>
            <div className="clearfix"></div>
            <ul className="pagination pull-right">
              <li className="disabled"><a href="#"><span className="glyphicon glyphicon-chevron-left"></span></a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-chevron-right"></span></a></li>
            </ul>
          </div>
      )
    }
    else {
      return(
        <div>Loading..</div>
      )
    }
  }

}

const BasicRow=(props) =>
      <tr key={props._id}>


        <td key={props.StudentName}>{props.StudentName}</td>

        <td key={props.Course}>{props.Course}</td>


        <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span className="glyphicon glyphicon-pencil"></span></button></p></td>
        <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span className="glyphicon glyphicon-trash"></span></button></p></td>
      </tr>


export default Studentslist
