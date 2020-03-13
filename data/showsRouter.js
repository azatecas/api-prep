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
                    errorMessage: "error on retrieving shows"
                })
            })
    })

    router.get('/:id/characters', (req, res) => {
        Shows
            .getShowsCharacters(req.params.id)
            .then(char => {
                res.status(200).json(char)
            })
            .catch(()=> {
                res.status(500).json({error: "failed to get characters by id"})
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
                    errorMessage: "error on adding shows"
                })
            })
    } )


    router.put('/:id', (req, res) => {
        const { id } = req.params;
        const body = req.body;
        Shows
            .update(id, body)
            .then(() => {
                res.status(200).json({message: "it has edited", show: body });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    errorMessage: "error on editing shows"
                })
            })
    })

    router.delete('/:id', (req, res) => {
        const { id } = req.params;
        Shows
            .remove(id)
            .then(() => {
                res.status(200).json({message: "deleted successfully", id_of_show_deleted: req.params.id });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({
                    errorMessage: "error on deleting show"
                })
            }) 
    })


module.exports = router;