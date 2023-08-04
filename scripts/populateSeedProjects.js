const random = require('random-name');
const Project = require('../models/project');


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomChoice(dataArray) {
  const random = Math.floor(Math.random() * dataArray.length);
  return dataArray[random]
}

const mongoose = require('mongoose');
const config = require('../config/key');
mongoose.connect(config.mongoURI, { useNewUrlParser: true }).then(async () => {
  console.log('DB connected!');
  populate()
}).catch(err => console.log(err));

async function populate() {
  try {
    const user_ids = ['cljzc7z2i0000clj6hhbj0hf3']
    const NumberOfProjects = 100;
    for (let i = 0; i < NumberOfProjects; i++) {
      const obj = {
        title: random.first(),
        budget: getRandomInt(10, 5000),
        deadline: randomDate(new Date(2023, 0, 1), new Date()),
        delete_on: randomDate(new Date(2023, 0, 1), new Date()),
        uploader_user_id: getRandomChoice(user_ids)
      }
      console.log(obj)
      const project = await Project.create(obj)
      console.log(project.id)
    }
    console.log('DONE!')
  } catch (err) {
    console.error(err)
  }
}