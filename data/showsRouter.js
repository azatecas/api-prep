const express = require('express');

const router = express.Router();
const Shows = require("./helpers/showsModel.js");

    router.get('/', (req, res) => {
        Shows
            .get()
            .then(show => {
                res.status(200).json(show);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: "error on retrieving shows"
                })
            })
    })

    router.post('/', (req, res) => {
        const body = req.body;
        Shows
            .insert(body)
            .then(() => {
                res.status(201).json({ message: "Show was created", show: body });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: "error on adding shows"
                })
            })
    } )


    router.put('/:id', (req, res) => {
        Shows
            .update(req.params.id, req.body)
            .then(edited => {
                res.status(200).json(edited);
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    error: "error on editing shows"
                })
            })
    })

    router.delete('/:id', (req, res) => {
        Shows
            .remove(req.params.id)
            .then(show => {
                res.status(200).json(show);
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    error: "error on deleting shows"
                })
            }) 
    })


module.exports = router;