import React from 'react'
import uuid from 'uuid'
import {Image, Table, Modal, Button, FormGroup, FormControl} from 'react-bootstrap'
import AddModal from './AddModal'
import ProductTable from './ProductTable'

const Home = React.createClass({
  getInitialState(){
    try{
        var items = JSON.parse(localStorage.productlist)
        let totalPrice = items.reduce((item, next) =>{
          console.log("item.price:", item.price)
          return parseInt(item.price) + parseInt(next.price);
        }, 0)
      } catch(err){
        var items = [];
      }

    return{
      productlist: items,
      restaurant: {},
      addShow: false,
      sortName: true,
      sortPrice: true,
      totalPrice: totalPrice,
      totalItems: items.length
    }
  },
  totalPrice(){
    let price = this.state.productlist.reduce((item,next)=>{
      return parseInt(item.price) + parseInt(next.price);
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
    let sortArr
      if(this.state.sortName){
        sortArr = this.state.productlist.sort((a,b) =>{
          if(a.name < b.name){
            return -1;
          } else if(a.name > b.name){
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({sortName: false})
      }else{
        sortArr = this.state.productlist.sort((a,b) =>{
          if(b.name < a.name){
            return -1;
          } else if(b.name > a.name){
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({sortName: true})
      }
      this.setState({productlist: sortArr})
  },
  sortPrice(){
    let sortArr
      if(this.state.sortPrice){
        sortArr = this.state.productlist.sort((a,b) =>{
          if(a.price < b.price){
            return -1;
          } else if(a.price > b.price){
            return 1;
          } else {
            return 0;
          }
        });
        this.setState({sortPrice: false})
      }else{
        sortArr = this.state.productlist.sort((a,b) =>{
          if(b.price < a.price){
            return -1;
          } else if(b.price > a.price){
            return 1;
          } else {
            return 0;
          }
        });
      this.setState({sortPrice: true})
      }
      this.setState({productlist: sortArr})
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
          <h2>Product List</h2>
          <h4>Total Items: {this.state.totalItems} || Total Price: {this.state.totalPrice}</h4>
          </div>
          <div className="col-xs-4">
          <br />
          <h4>New <Button onClick={this.openAddModal} className="btn-success fa fa-plus-square fa-sm"></Button></h4>
          </div>
        </div>
        <ProductTable productlist={this.state.productlist} update={this.updateItem} delete={this.deleteItem} sortName={this.sortName} sortPrice={this.sortPrice}/>
        <AddModal show={this.state.addShow} submit={this.onAdd} onHide={this.closeAddModal}/>
        </div>
        )
  }
})



export default Home;
