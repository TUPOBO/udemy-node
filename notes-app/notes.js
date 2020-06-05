const fs = require('fs');

const getNotes = function () {
  return 'Your notes ...';
};

// 更新 note
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((item) => item.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNote(notes);
    console.log('New note added!');
  } else {
    console.log('Note title taken!');
  }
};

// 读取原有 notes 内容
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    const notes = JSON.parse(dataJSON);
    return notes;
  } catch (error) {
    return [];
  }
};

// 保存最新 notes 内容
const saveNote = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = { getNotes, addNote };
