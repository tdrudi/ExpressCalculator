const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const {findMode, findMean, findMedian} = require('./calculate');

app.get('/mode', function(req, res, next){
    if(!req.query.nums){
        throw new ExpressError('Error: You must pass in a list of numbers', 400)
    }

    let numbers = req.query.nums.split(',');

    let result = {
        operation: "Mode",
        value: findMode(numbers)
    }

    return res.send(result);
});


app.get('/mean', function(req, res, next){
    if(!req.query.nums){
        throw new ExpressError('Error: You must pass in a list of numbers', 400)
    }

    let numbers = req.query.nums.split(',');

    let result = {
        operation: "Mean",
        value: findMean(numbers)
    }

    return res.send(result);
});

app.get('/median', function(req, res, next){
    if(!req.query.nums){
        throw new ExpressError('Error: You must pass in a list of numbers', 400)
    }

    let numbers = req.query.nums.split(',');

    let result = {
        operation: "Median",
        value: findMedian(numbers)
    }

    return res.send(result);
});

app.use(function(req, res, next){
    const error = new ExpressError("Not Found", 404);
    return next(error);
});

app.listen(3000, function(){
    console.log('Starting server on Port 3000');
});