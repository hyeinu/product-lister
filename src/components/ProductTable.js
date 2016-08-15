import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'
import EditModal from './EditModal'

const ProductTable = React.createClass({
  getInitialState(){
    return {
      menu: this.props.menu,
      showEditModal: false,
      editProduct: {}
    }
  },
  deleteMenu(item){
    this.props.delete(item.id);
  },
  showModal(item){
    this.setState({editProduct: item})
    this.setState({showEditModal: true })
  },
  close() {
    this.setState({showEditModal: false})
  },
  submit(newItem) {
    this.setState({showEditModal: false})
    let url = `/api/menu/${newItem.id}`;

    fetch(url, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    .then(Response =>{
      return Response.json()
    })
    .then(data =>{
      this.props.update(data)
    })
    .catch(err => {
      console.log('err:', err)
    })
  },
  render(){
    // let smClose = () => this.setState({ showEditModal: false });
    let productItems = this.props.productlist.map(item =>
      (
        <tr key={item.id}>
          <td className="col-xs-2">{item.name}</td>
          <td className="col-xs-1">{item.price}</td>
          <td className="col-xs-2"><Image src={item.picUrl} rounded responsive /></td>
          <td className="col-xs-1"><Button onClick={this.showModal.bind(null, item)} className="btn btn-info fa fa-pencil-square-o"></Button></td>
          <td className="col-xs-1"><Button onClick={this.deleteMenu.bind(null, item)} className="btn btn-danger fa fa-trash"></Button></td>
        </tr>
      )
    )

    return (
     <div>
      <Table className="container" hover={true}>
        <thead>
          <tr>
            <th className="col-xs-2">Name</th>
            <th className="col-xs-1">Price $</th>
            <th className="col-xs-2">Picture</th>
            <th className="col-xs-1">Edit</th>
            <th className="col-xs-1">Delete</th>
          </tr>
        </thead>
          <tbody>
           {productItems}
        </tbody>
      </Table>
              <EditModal show={this.state.showEditModal} onSubmit={this.submit} onHide={this.close} menu={this.state.editMenu}/>
     </div>
    )
  }
})

export default ProductTable;
