import React from 'react';
import PropTypes from 'prop-types';
import { Table,Popconfirm,Button } from 'antd';

const ProductLst = ({ onAdd,onDelete,products }) => {
    const columns = [{
    	title:'Name',
    	dataIndex:'name',
        key: 'name'
    },{
    	title:'Actions',
    	dataIndex:'actions',
        key: 'actions',
    	render:(text,record) => {
            return(
            	<Popconfirm title="Delete?" key={record.id} onConfirm={()=>onDelete(record.id)}>
            	    <Button>Delete</Button>
            	</Popconfirm>
           	);
    	}
    }];
    let len = products.length;
    var array = [{name:'huahuahua'+len,id:products[len-1].id+1,key:len+1}];
    return(
        <div>  
            <Button onClick={()=>onAdd(array)}>Add</Button> 
    	    <Table dataSource = {products} columns={columns} />
        </div>
    );
}

ProductLst.propTypes = {
	onDelete:PropTypes.func.isRequired,
    onAdd:PropTypes.func.isRequired,
	products:PropTypes.array.isRequired
};

export default ProductLst;