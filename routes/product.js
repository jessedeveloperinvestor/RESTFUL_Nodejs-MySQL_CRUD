const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/create',(req, res, next)=>{
	let product = req.body;
	query = "insert into product (name,description,price) values (?,?,?)";
	connection.query(query,[product.name,product.description,product.price],(err,results)=>{
		if(!err){
			return res.status(200).json({message: "Product Added Successfully"});
		}
		else
			return res.status(500).json(err);
	});
});

router.get('/read',(req,res,next)=>{
	var query = "select * from product";
	connection.query(query,(err,results)=>{
		if(!err){
			return res.status(200).json(results);
		}
		else{
			return res.status(500).json(err);
		}
	});
});

router.put('/update/:id',(req,res,next)=>{
	const id = req.params.id;
	let product = req.body;
	var query = "update product set name=?,description=?,price=? where id=?";
	connection.query(query,[product.name,product.description,product.price,id],(err,results)=>{
		if(!err){
			if(results.affectedRows == 0){
				return res.status(400).json({message:"Product id not found"});
			}
			return res.status(200).json({message:"Product updated successfully"});
		}
		else{
			return res.status(500).json(err);
		}
	})
})

router.delete('/delete/:id',(req,res,next)=>{
	const id = req.params.id;
	let product = req.body;
	var query = "update product set name=0,description=0,price=0 where id=?";
	connection.query(query,[id],(err,results)=>{
		if(!err){
			if(results.affectedRows == 0){
				return res.status(400).json({message:"Product id not found"});
			}
			return res.status(200).json({message:"Product deleted successfully"});
		}
		else{
			return res.status(500).json(err);
		}
	})
})

module.exports = router;