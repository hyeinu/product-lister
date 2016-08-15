import React from 'react'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'
import AddModal from './AddModal'
import EditModal from './EditModal'
import ProductTable from './ProductTable'

//destructuring in the home
const Home = React.createClass({
  getInitialState(){
    return{
      menu: [],
      productlist: [],
      restaurant: {},
      addShow: false
    }
  },
  updateItem(newItem){

   this.setState({menu: newMenu})
  },
  addNew(item) {

  },
  deleteItem(id) {

  },
  onSubmit(item){
    this.setState({addShow: false})
  },
  close(){
    this.setState({addShow: false})
  },
  openAddModal(item){
    this.setState({addShow: true })
  },
  componentDidUpdate(){
  localStorage.productlist = JSON.stringify(this.state.productlist);
  let newproductlist = JSON.parse(localStorage.productlist)
  this.setState({productlist: newproductlist})
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
        <ProductTable menu={this.state.menu} update={this.updateItem} delete={this.deleteItem}/>
        <AddModal show={this.state.addShow} submit={this.onSubmit} onHide={this.close} add={this.state.addNew}/>
        </div>
        )
  }
})



export default Home;
