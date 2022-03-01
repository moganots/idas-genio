/*
|------------------------------------------------------------------------------------------------------------------
| Author:	    TS MOGANO
| Create date:  02/03/2021
| Description:  IDAS - Genio - API - common File System utilities class 
|------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const { formatDateMMDDYYWithSlashSeparator } = require(`./date-util`);
const {
  isNotEmptyString,
  toLocaleLowerCaseTrim,
  StringFormat,
  splitString,
  getLast,
  getFirst,
} = require(`./functions`);
const { readdir } = require("fs");

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| Function(s)
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
const pathJoin = (paths = []) => {
  return paths
    .filter(
      (path) =>
        !(path === null || path === undefined || String(path).length === 0)
    )
    .join(`/`);
};
const createDirectory = (path) => {
  if (isNotEmptyString(path)) {
    const fs = require(`fs`);
    path.split(`/`).reduce((directories, directory) => {
      directories += `${directory}/`;
      if (!fs.existsSync(directories)) {
        fs.mkdirSync(directories);
      }
      return directories;
    }, ``);
  }
};
const copyDirectory = (path, recursive = false) => {};
const deleteDirectory = (path, recursive = false) => {};
const moveDirectory = (path, recursive = false) => {};
const renameDirectory = (path, recursive = false) => {};
const getDirectories = (path, callback) => {
  readdir(path, { withFileTypes: true }, (error, files) => {
    if (error) {
      callback({ message: splitString(error.message, `,`)[0], hasError: true });
    } else {
      const directories = files
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
      callback({ message: `Found ${directories.length} directories`, result: directories, hasError: false });
    }
  });
};
const getFiles = (path, callback) => {
  readdir(path, { withFileTypes: true }, (error, files) => {
    if (error) {
      callback({ error: { message: error.message } });
    } else {
      callback(
        files.filter((dirent) => dirent.isFile()).map((dirent) => ({name: dirent.name, nameNoFileExtention: getFirst(dirent.name, `.`), fileType: getLast(dirent.name, `.`), path: pathJoin([path, dirent.name])}))
      );
    }
  });
};
const createFile = (path) => {};
const copyFile = (sourcePath, destinationPath) => {};
const deleteFile = (path) => {};
const moveFile = (sourcePath, destinationPath) => {};
const renameFile = (sourcePath, destinationPath) => {};
const writeFileAttachmentToDisc = (err, fileAttachment) => {
  if (!isObjectSet(err) && isObjectSet(fileAttachment)) {
    const objectName = fileAttachment.ProjectId
      ? `project`
      : fileAttachment.TaskId
      ? `task`
      : fileAttachment.CalendarEventId
      ? `calendar-event`
      : `file`;
    const objectId =
      fileAttachment.ProjectId ||
      fileAttachment.TaskId ||
      fileAttachment.CalendarEventId ||
      fileAttachment._id;
    const fileDirectory = toLocaleLowerCaseTrim(
      StringFormat(`${directory}/{2}/{3}{4}`, [
        companyName,
        applicationName,
        objectName,
        objectId,
        objectName !== `file` ? `/${fileAttachment._id}` : ``,
      ])
    );
    const filePath = `${fileDirectory}/${fileAttachment.FileName}`;
    const fileContent = isNotEmptyString(fileAttachment.FileContent)
      ? fileAttachment.FileContent
      : null;
    if (
      isNotEmptyString(fileDirectory) &&
      isNotEmptyString(filePath) &&
      fileContent
    ) {
      createDirectory(fileDirectory);
      fs.writeFile(filePath, fileContent, "base64", (err) => {
        if (err) {
          error(__filename, `writeFileAttachmentToDisc:fs.writeFile`, err);
        }
      });
    }
  }
};

/*
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| module.exports
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
module.exports = {
  pathJoin: pathJoin,
  createDirectory: createDirectory,
  copyDirectory: copyDirectory,
  deleteDirectory: deleteDirectory,
  moveDirectory: moveDirectory,
  renameDirectory: renameDirectory,
  getDirectories: getDirectories,
  getFiles: getFiles,
  createFile: createFile,
  copyFile: copyFile,
  deleteFile: deleteFile,
  moveFile: moveFile,
  renameFile: renameFile,
  writeFileAttachmentToDisc: writeFileAttachmentToDisc,
};
