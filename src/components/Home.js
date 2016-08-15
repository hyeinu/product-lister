import React from 'react'
import uuid from 'uuid'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'
import AddModal from './AddModal'
import ProductTable from './ProductTable'

const Home = React.createClass({
  getInitialState(){
    return{
      productlist: [],
      restaurant: {},
      addShow: false
    }
  },
  updateItem(newItem){

   this.setState({menu: newMenu})
  },
  deleteItem(id) {

  },
  onAdd(item){
    item.id = uuid();
    this.setState({addShow: false})
    this.setState({this.state.productlist.concat(item)})
  },
  closeAddModal(){
    this.setState({addShow: false})
  },
  openAddModal(item){
    this.setState({addShow: true })
  },
  sortName(){
    //sort the array according to name
  },
  sortPrice(){
    //sort the array according to price
  },
  componentDidUpdate(){
  localStorage.productlist = JSON.stringify(this.state.productlist);
  // let newproductlist = JSON.parse(localStorage.productlist)
  // this.setState({productlist: newproductlist})
  },
  render() {
    let smClose = () => this.setState({ addShow: false });
      return (
        <div>
        <div className="row">
          <div className="col-xs-8">
          <h2>Add New Product</h2>
          </div>
          <div className="col-xs-4">
          <br />
          <Button onClick={this.openAddModal} className="btn-success fa fa-plus-square fa-sm"></Button>
          </div>
        </div>
        <ProductTable productlist={this.state.productlist} update={this.updateItem} delete={this.deleteItem} sortName={this.sortName} sortPrice={this.sortPrice}/>
        <AddModal show={this.state.addShow} submit={this.onAdd} onHide={this.closeAddModal}/>
        </div>
        )
  }
})



export default Home;
