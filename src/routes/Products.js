import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import DvaHeader from '../components/Header';

const Products = ({dispatch,products}) => {
	function handleDelete(id){
		//用来将 Action 发送给 State
        dispatch({
        	type:'products/delete', // 如果在 model 外调用，需要添加 namespace
        	payload:id  // 需要传递的信息
        });
	}

	function handleAdd(array){
        dispatch({
        	type:'products/add',
        	payload:array
        });
	}

	return(
		<div>
		    <DvaHeader></DvaHeader>
		    <h2>List of Products</h2>
		    <ProductList onAdd={handleAdd} onDelete={handleDelete} products={products} />
		</div>
	);
}

export default connect(({products}) => ({
	products
}))(Products);