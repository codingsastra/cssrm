import React, { Component } from 'react';
import user from './user.jpg';
import {
  Image,
  Button
} from 'react-bootstrap';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<Image responsive thumbnail src={imagePreviewUrl} width="50px" height="50px" />);
    } else {
      $imagePreview = (<div><img src={user} height="150px" width="150px"/></div>);
    }

    return (
      <div className="previewComponent">
        
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
             <div className="imgPreview">
          {$imagePreview}

        </div>
           
          
       
      </div>

    )
  }
}
  

export default ImageUpload;