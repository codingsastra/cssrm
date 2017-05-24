import React, { Component } from 'react'


class Basicget extends Component {

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
         'Authorization': 'Basic '+btoa('medicalhall:Y%pw)AJNPMsgb*x~5nyJ8W+'),
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
              <h3>Students</h3>
              <a href="/basic" className="btn btn-success btn-lg"><span className="glyphicon glyphicon-plus"></span> New Registration</a>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th><input type="checkbox" id="checkall" /></th>
                  <th>ReasonofEnquire</th>
                  <th>StudentName</th>
                  <th>ParentName</th>
                  <th>SeekingAdmission</th>
                  <th>DOB</th>
                   <th>Delete</th>
                    <th>Address</th>
                     <th>Mobileno</th>
                      <th>Email</th>
                       <th>refferedId</th>
                        <th>College</th>
                        <th> occuption</th>
                        <th>totalfee</th>
                        <th>discountfee</th>
                        <th>finalfee</th>
                </tr>
              </thead>
              <tbody>
                {this.state.basic.map((basic, index) => (
                    <BasicRow _id={basic._id}
                                ReasonofEnquire={basic.ReasonofEnquire}
                                StudentName={basic.StudentName}
                                ParentName={basic.ParentName}
                                SeekingAdmission={basic.SeekingAdmission}
                                DOB={basic.DOB}
                                Address={basic.Address}
                                Mobileno={basic.Mobileno}
                                Email={basic.Email}
                                refferedId={basic.refferedId}
                                College={basic.College}
                                occuption={basic.occuption}
                                 totalfee={basic.totalfee}
                                  discountfee={basic.discountfee}
                                   finalfee={basic.finalfee}
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
        <td><input type="checkbox" className="checkthis" /></td>
        <td key={props.ReasonofEnquire}>{props.ReasonofEnquire}</td>
        <td key={props.StudentName}>{props.StudentName}</td>
        <td key={props.ParentName}>{props.ParentName}</td>
         <td key={props.SeekingAdmission}>{props.SeekingAdmission}</td>
          <td key={props.DOB}>{props.DOB}</td>
           <td key={props.Address}>{props.Address}</td>
            <td key={props.Mobileno}>{props.Mobileno}</td>
             <td key={props.Email}>{props.Email}</td>
              <td key={props.refferedId}>{props.refferedId}</td>
               <td key={props.College}>{props.College}</td>
               <td key={props.occuption}>{props.occuption}</td>
               <td key={props.totalfee}>{props.totalfee}</td>
               <td key={props.finalfee}>{props.finalfee}</td>
               <td key={props.Course}>{props.Course}</td>
        <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span className="glyphicon glyphicon-pencil"></span></button></p></td>
        <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span className="glyphicon glyphicon-trash"></span></button></p></td>
      </tr>


export default Basicget