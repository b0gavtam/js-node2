import express from "express"

const router = express.Router();

router.get('/admin',(req,res) =>{
    console.log("admin") 
    res.send("<h2>Admin page</h2>")
});
router.get('/product',(req,res) =>{
    console.log("product page") 
    res.send("<h2>Product page</h2>")
});  
router.get('/admin/product',(req,res) =>{
    console.log("admin product page") 
    res.send(`<form action = '/admin/product' method= 'POST'> 
                <input type ="text" name = "productName">
                <button type = "submit"> Send </button>`)
}); 
router.post('/admin/product',(req,res) =>{ 
    console.log("POST user üzenet")
    res.send("megkaptam a POST üzenetet")
});
export default router;