import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'

const AddModal = React.createClass({
  getInitialState(){
    return{
     name: "",
     price: 0,
     picUrl: "",
    }
  },
  changeName(e){
    this.setState({name: e.target.value})
  },
  changePrice(e){
    this.setState({price: e.target.value})
  },
  changeType(e){
    this.setState({type: e.target.value})
  },
  changePicUrl(e){
    this.setState({picUrl: e.target.value})
  },
  submit(){
    this.setState({name: '', price: 0, picUrl: ''})
    this.props.submit(this.state);
  },
  render() {

    return (
      <Modal show={this.props.show} onHide={this.props.onHide} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Add New Item</Modal.Title>
        </Modal.Header>
         <form>
         <FormGroup>
        <Modal.Body>
          <FormControl type="text" placeholder="Name" value={this.state.name} onChange={this.changeName}/>
          <FormControl type="number" placeholder="Price" value={this.state.price} onChange={this.changePrice}/>
          <FormControl type="text" placeholder="Picture Url" value={this.state.picUrl} onChange={this.changePicUrl}/>
          <Image src={this.state.picUrl} rounded responsive />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.submit}>Add New</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
        </FormGroup>
        </form>
      </Modal>
    );
  }
});

export default AddModal
