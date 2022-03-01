/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Author:		TS MOGANO
| Create date:	02/03/2021
| Description:	IDAS - Genio - API - images controller class
|--------------------------------------------------------------------------------------------------------------------------------------------
 */

/*
|--------------------------------------------------------------------------------------------------------------------------------------------
| Dependency(ies)
|--------------------------------------------------------------------------------------------------------------------------------------------
 */
const {
  assetsImgAvatars,
  assetsImgBanks,
  assetsImgBanksIcon,
  assetsImgBanksMain,
  assetsImgFileTypes,
  assetsImgIcons,
  assetsImgIdas,
} = require(`../../config/config`).api.fileSystem;
const {
  getFiles,
} = require("../../common/file-system-util");
const {
  toLocaleLowerCaseTrim,
  splitString,
  capitalizeFirstLetter,
} = require("../../common/functions");
const { onHttpError, onHttpSuccess } = require("../../common/logging/logger");

/*
|------------------------------------------------------------------------------------------------------------------
| Function(s)
|------------------------------------------------------------------------------------------------------------------
 */
const Controller = () => {
  /*
  |------------------------------------------------------------------------------------------------------------------
  | Function Return(s)
  |------------------------------------------------------------------------------------------------------------------
  */
  const getImagesAvatars = (request, response) => {
    try {
      getFiles(assetsImgAvatars, (result) => {
        if (!result || result.hasError) {
          return onHttpError(__filename, request, response, {
            message: (
              result || {
                message: `Unable to get search result(s) for: ${assetsImgAvatars}`,
              }
            ).message,
          });
        } else {
          onHttpSuccess(__filename, request, response, {
            message: `${result.length} file(s) found in the ${assetsImgAvatars} directory`,
            data: result,
          });
        }
      });
    } catch (error) {
      return onHttpError(__filename, request, response, error);
    } finally {
    }
  };
  const getImagesBanks = (request, response) => {
    try {
      getFiles(assetsImgBanks, (result) => {
        if (!result || result.hasError) {
          return onHttpError(__filename, request, response, {
            message: (
              result || {
                message: `Unable to get search result(s) for: ${assetsImgBanks}`,
              }
            ).message,
          });
        } else {
          onHttpSuccess(__filename, request, response, {
            message: `${result.length} file(s) found in the ${assetsImgBanks} directory`,
            data: result.map((file) => {
              file.bankName = getBankName(file);
              return file;
            }),
          });
        }
      });
    } catch (error) {
      return onHttpError(__filename, request, response, error);
    } finally {
    }
  };
  const getImagesBanksIcon = (request, response) => {
    try {
      getFiles(assetsImgBanksIcon, (result) => {
        if (!result || result.hasError) {
          return onHttpError(__filename, request, response, {
            message: (
              result || {
                message: `Unable to get search result(s) for: ${assetsImgBanksIcon}`,
              }
            ).message,
          });
        } else {
          onHttpSuccess(__filename, request, response, {
            message: `${result.length} file(s) found in the ${assetsImgBanksIcon} directory`,
            data: result.map((file) => {
              file.bankName = getBankName(file);
              return file;
            }),
          });
        }
      });
    } catch (error) {
      return onHttpError(__filename, request, response, error);
    } finally {
    }
  };
  const getImagesBanksMain = (request, response) => {
    try {
      getFiles(assetsImgBanksMain, (result) => {
        if (!result || result.hasError) {
          return onHttpError(__filename, request, response, {
            message: (
              result || {
                message: `Unable to get search result(s) for: ${assetsImgBanksMain}`,
              }
            ).message,
          });
        } else {
          onHttpSuccess(__filename, request, response, {
            message: `${result.length} file(s) found in the ${assetsImgBanksMain} directory`,
            data: result.map((file) => {
              file.bankName = getBankName(file);
              return file;
            }),
          });
        }
      });
    } catch (error) {
      return onHttpError(__filename, request, response, error);
    } finally {
    }
  };
  const getImagesFileTypes = (request, response) => {
    try {
      getFiles(assetsImgFileTypes, (result) => {
        if (!result || result.hasError) {
          return onHttpError(__filename, request, response, {
            message: (
              result || {
                message: `Unable to get search result(s) for: ${assetsImgFileTypes}`,
              }
            ).message,
          });
        } else {
          onHttpSuccess(__filename, request, response, {
            message: `${result.length} file(s) found in the ${assetsImgFileTypes} directory`,
            data: result,
          });
        }
      });
    } catch (error) {
      return onHttpError(__filename, request, response, error);
    } finally {
    }
  };
  const getImagesIcons = (request, response) => {
    try {
      getFiles(assetsImgIcons, (result) => {
        if (!result || result.hasError) {
          return onHttpError(__filename, request, response, {
            message: (
              result || {
                message: `Unable to get search result(s) for: ${assetsImgIcons}`,
              }
            ).message,
          });
        } else {
          onHttpSuccess(__filename, request, response, {
            message: `${result.length} file(s) found in the ${assetsImgIcons} directory`,
            data: result,
          });
        }
      });
    } catch (error) {
      return onHttpError(__filename, request, response, error);
    } finally {
    }
  };
  const getImagesIdas = (request, response) => {
    try {
      getFiles(assetsImgIdas, (result) => {
        if (!result || result.hasError) {
          return onHttpError(__filename, request, response, {
            message: (
              result || {
                message: `Unable to get search result(s) for: ${assetsImgIdas}`,
              }
            ).message,
          });
        } else {
          onHttpSuccess(__filename, request, response, {
            message: `${result.length} file(s) found in the ${assetsImgIdas} directory`,
            data: result,
          });
        }
      });
    } catch (error) {
      return onHttpError(__filename, request, response, error);
    } finally {
    }
  };
  const getBankName = (file) => {
    switch (toLocaleLowerCaseTrim(file.nameNoFileExtention)) {
      case `al-baraka-bank`:
        return splitString(file.nameNoFileExtention, `-`)
          .map((name, index) => {
            if (index > 0) {
              return capitalizeFirstLetter(name);
            }
            return name;
          })
          .join(``);
      case `wes-bank`:
        return splitString(file.nameNoFileExtention, `-`)
          .map((name) => capitalizeFirstLetter(name))
          .join(``);
      default:
        return splitString(file.nameNoFileExtention, `-`)
          .map((name) => capitalizeFirstLetter(name))
          .join(` `);
    }
  };

  return {
    getImagesAvatars: getImagesAvatars,
    getImagesBanks: getImagesBanks,
    getImagesBanksIcon: getImagesBanksIcon,
    getImagesBanksMain: getImagesBanksMain,
    getImagesFileTypes: getImagesFileTypes,
    getImagesIcons: getImagesIcons,
    getImagesIdas: getImagesIdas,
  };
};

/*
|------------------------------------------------------------------------------------------------------------------
| module.exports
|------------------------------------------------------------------------------------------------------------------
 */
module.exports = Controller;
