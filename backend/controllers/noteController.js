import Notes from '../models/note.js';

async function createNotes(req,res){
    const {title, content} = req.body;
    if (!title || !content) 
        return res.status(400).json({message:"Title and content are required"});
    try {
        await Notes.create({title, content});
    return res.status(201).json({message:"Note created successfully", "id":Notes._id});}
    catch(err) {
        return res.status(500).json({"message": err.message})

    }
}


async function getNotesById(req,res){
    const noteId = req.params.id;
    const result = await Notes.findById(noteId)
    {
    return res.json(result);
}
}


async function getNotes(req,res){
   try { const notes = await Notes.find()
    return res.status(200).json(notes);}

    catch (err){
        return res.status(500).json({"message": err.message})

    }

}

export { createNotes, getNotes, getNotesById };
