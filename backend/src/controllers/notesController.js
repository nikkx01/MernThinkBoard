import Note from "../models/Note.js"; 

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
}

export async function updateNote(req, res) {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export async function deleteNote(req, res) {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  } 
}