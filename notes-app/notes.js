const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes ...';
// 添加 note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((item) => item.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNote(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

/**
 * 删除 note
 * @param {string} title -- note title
 */
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((item) => item.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNote(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

/**
 * 展示所有notes内容
 */
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse('Your notes...'));
  notes.forEach((note) => {
    console.log(chalk.green(note.title));
  });
};

// 读取原有 notes 内容
const loadNotes = () => {
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
const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = { getNotes, addNote, removeNote, listNotes };
