import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'

const EditModal = React.createClass({
  getInitialState(){
    return{
     name: '',
     id: '',
     price: '',
     picUrl: ''
    }
  },
  componentWillReceiveProps(nextProps) {
    this.setState({name: nextProps.item.name, id: nextProps.item.id, price: nextProps.item.price, picUrl: nextProps.item.picUrl})
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
  onEdit(){
    this.props.onSubmit(this.state);
  },
  onClose(){
    this.setState({name: '', price: '', picUrl: '', id: ''})
  },
  render() {
    if (this.state.name) {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Edit {name}</Modal.Title>
        </Modal.Header>
         <form>
         <FormGroup>
        <Modal.Body>
          <FormControl type="text" value={this.state.name} onChange={this.changeName}/>
          <FormControl type="text" value={this.state.price} onChange={this.changePrice}/>
          <FormControl type="text" value={this.state.picUrl} onChange={this.changePicUrl}/>
          <Image src={this.state.picUrl} rounded responsive />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.onEdit}>Save Changes</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
        </FormGroup>
        </form>
      </Modal>
    );
   }
   else {
    return (<div></div>)
   }
  }
});


export default EditModal;
