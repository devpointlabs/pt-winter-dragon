import React, {Component} from 'react'
import axios from 'axios'
import {Container} from 'semantic-ui-react';

class ImageUpload extends Component {

    state = {
        selectedFile: null
    }
    fileSelectedHandler = e => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('', fd, {
            onUploadProgress: progressEvent => {
                console.log('Upload Progress: ' + Math.round(progressEvent.loaded/progressEvent.total *100) + '%' )

            }
        })
      
        .then(res => {
            console.log(res);
        })
    }

    render() {

        return (
            <Container>
            <div className="Upload">
            <h1>Hello!! It's me !! </h1>
            <input type="file" onChange={this.fileSelectedHandler}/> 
            <button onClick={this.fileUploadHandler}>Upload</button>
            <br/><br/><br/>
            </div>
            </Container>
        )
    }

}

export default ImageUpload;