import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import { readdir } from "fs/promises";

const mainPath = dirname(fileURLToPath(import.meta.url));

const organizeAllFiles = async () => {

  const allFiles = await readdir(mainPath);

  try {
    for (let item of allFiles) {
      const extension = item.split(".")[item.split(".").length - 1];

      if (extension != "js" && extension != "json") {
        const extensionDir = path.join(mainPath, extension);
        const sourceFile = path.join(mainPath, item);
        const destinationDir = path.join(extensionDir, item);

        if (!(fs.existsSync(extensionDir))) {
          fs.mkdirSync(extensionDir);
        }

        fs.rename(sourceFile, destinationDir, () => {
          
        });
      }
    }
  } catch (error) {
    console.error("Error aayo !!!", error.message);
  }
}

organizeAllFiles();
