var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    let foods = [{
        name: "chicken",
        img: "https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg",
        recipes: ["grilled", "tender", "crispy", "BBQ"]
    },
    {
        name: "beef",
        img: "https://applestonemeat.com/wp-content/uploads/2018/08/Bottom-Round-Roast-2018-06-Applestone-Raw-JenMayPhoto-122861.jpg",
        recipes: ["fillet", "medium rare"] 
    }]
    
    
    res.json(foods) 
})

module.exports = router