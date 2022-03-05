import CardData from "../database/cardData.js";
import mongoose from 'mongoose';

export const getCards = async (req, res) => {
    try {
        const cardData = await CardData.find();

        console.log(cardData);

        res.status(200).json(cardData);
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createCard = async (req, res) => {
    const card = req.body;

    const newCard = new CardData(card);

    try {
        await newCard.save();

        res.status(201).json(newCard);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateCard = async (req, res) => {
    const {id:_id} = req.params;
    const card = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        return res.status(404).send('NO Card with that id');
    }
    
    const updatedCard = await CardData.findByIdAndUpdate(_id,{...card,_id},{new:true})
    //const updatedCard = await CardData.findByIdAndUpdate(_id,card,{new:true})

    res.json(updatedCard);
}

export const deleteCard = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).send('NO Card with that id');
    }

    await CardData.findByIdAndRemove(id);
    res.json({message: 'Deleted Card successfully'})
}