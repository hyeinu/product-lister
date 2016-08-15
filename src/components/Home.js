import React from 'react'
import uuid from 'uuid'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'
import AddModal from './AddModal'
import ProductTable from './ProductTable'

const Home = React.createClass({
  getInitialState(){
    try{
        var items = JSON.parse(localStorage.productlist)
      } catch(err){
        var items = [];
      }
    return{
      productlist: items,
      restaurant: {},
      addShow: false,
      sortName: true,
      sortPrice: true
    }
  },
  updateItem(newItem){

   this.setState({menu: newMenu})
  },
  deleteItem(id) {
    this.setState({productlist: this.state.productlist.filter(item => {if(item.id !== id){return item}})});
  },
  onAdd(item){
    item.id = uuid();
    this.setState({addShow: false})
    this.setState({productlist: this.state.productlist.concat(item)})
  },
  closeAddModal(){
    this.setState({addShow: false})
  },
  openAddModal(item){
    this.setState({addShow: true })
  },
  sortName(){
    //sort the array according to name
    let sortArr = function(){
      if(sortName){
        this.state.productlist.sort((a,b) =>{
          return a.name - b.name;
        });
      }else{
        this.state.productlist.sort((a,b) =>{
          return b.name - a.name;
        });
      }
    }
    this.setState({productlist: sortArr})
    this.setState({sortName: false})
  },
  sortPrice(){
    //sort the array according to price
    let sortArr = function(){
      if(sortPrice){
        this.state.productlist.sort((a,b) =>{
          return a.price - b.price;
        });
      }else{
        this.state.productlist.sort((a,b) =>{
          return b.price - a.price;
        });
      }
    }
    this.setState({productlist: sortArr})
    this.setState({sortPrice: false})
  },
  componentDidUpdate(){
  localStorage.productlist = JSON.stringify(this.state.productlist);
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
