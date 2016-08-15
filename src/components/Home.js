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
      sortPrice: true,
      totalPrice: 0,
      totalItems: 0
    }
  },
  totalPrice(){
    let price = this.state.productlist.reduce((item,next)=>{
      return item.price + next.price
    },0)
    this.setState({totalPrice: price});
  },
  updateItem(newItem){
   this.setState({menu: newMenu})
   this.setState({totalItems: this.state.productlist.length})
   this.totalPrice();
  },
  deleteItem(id) {
    this.setState({productlist: this.state.productlist.filter(item => {if(item.id !== id){return item}})});
    this.setState({totalItems: this.state.productlist.length})
    this.totalPrice();
  },
  onAdd(item){
    item.id = uuid();
    this.setState({addShow: false})
    this.setState({productlist: this.state.productlist.concat(item)})
    this.setState({totalItems: this.state.productlist.length})
    this.totalPrice();
  },
  closeAddModal(){
    this.setState({addShow: false})
  },
  openAddModal(item){
    this.setState({addShow: true })
  },
  sortName(){
    //sort the array according to name
      if(this.state.sortName){
        let sortArr = this.state.productlist.sort((a,b) =>{
          return a.name - b.name;
          this.setState({sortName: false})
          console.log("sortArr:", sortArr)
        });
      }else{
        let sortArr = this.state.productlist.sort((a,b) =>{
          return b.name - a.name;
        });
      }

    // this.setState({productlist: sortArr})
  },
  sortPrice(){
  
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
