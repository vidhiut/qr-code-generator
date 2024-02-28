
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        type:"input",
        message:"type your url here => ",
        name:"url"
    }
  ])
  .then((answers) => {
    const url=answers.url;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr-img.png'));
    fs.writeFile("urlName",url,(err)=>{
        if (err) throw err;
        console.log("qr generated file saved");
    });
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
