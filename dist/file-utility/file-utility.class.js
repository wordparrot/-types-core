"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const util_1 = require("util");
const file_utility_functions_1 = require("./file-utility.functions");
const readFilePromisified = util_1.promisify(fs_1.readFile);
const writeFilePromisified = util_1.promisify(fs_1.writeFile);
const deleteFilePromisified = util_1.promisify(fs_1.unlink);
const statPromisified = util_1.promisify(fs_1.stat);
const mkdirPromisified = util_1.promisify(fs_1.mkdir);
const rmdirPromisified = util_1.promisify(fs_1.rm);
class FileUtility {
    constructor(config) {
        this.tempFolder = `${process.cwd()}/content/temp`;
        this.repositoriesFolder = `${process.cwd()}/content/repositories`;
        this.uniqId = config.uniqId;
        this.pipelineJobId = config.pipelineJobId;
        this.pipelineNodeId = config.pipelineNodeId;
        this.filename = config.filename;
        this.buffer = config.buffer;
        this.extension = file_utility_functions_1.getExtension(this.filename);
        this.repositoryId = config.repositoryId;
        this.parentRepositoryItem = config.parentRepositoryItem;
    }
    get jobPath() {
        return `${this.tempFolder}/${this.pipelineJobId}`;
    }
    get nodePath() {
        return `${this.jobPath}/${this.pipelineNodeId}`;
    }
    get filePath() {
        return `${this.nodePath}/${this.filename}`;
    }
    get repositoriesPath() {
        return `${this.repositoriesFolder}/${this.repositoryId}`;
    }
    get repositoriesFilePath() {
        if (!this.filename) {
            throw new Error('Cannot get repository file path: filename required.');
        }
        if (!this.repositoryId) {
            throw new Error('Cannot get repository file path: repository ID required.');
        }
        return `${this.repositoriesFolder}/${this.repositoryId}/${this.filename}`;
    }
    saveToTemp(encoding = 'utf8') {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createNodeTempFolders();
            yield this.writeToTempFolder(encoding);
            return {
                uniqId: this.uniqId ||
                    `${this.pipelineJobId}_${this.pipelineNodeId}_${this.filename}`,
                filename: this.filename,
                path: this.filePath,
                type: file_utility_functions_1.getExtension(this.filename),
                pipelineJobId: this.pipelineJobId,
                pipelineNodeId: this.pipelineNodeId,
                parentRepositoryItem: this.parentRepositoryItem,
            };
        });
    }
    createNodeTempFolders() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield statPromisified(this.jobPath);
            }
            catch (e) {
                // This folder does not exist yet
                try {
                    yield mkdirPromisified(this.jobPath);
                }
                catch (e) {
                    console.log(e);
                    // This folder does not exist yet
                    throw new Error('cannot_make_temp_job_folder');
                }
            }
            try {
                yield statPromisified(this.nodePath);
            }
            catch (e) {
                // This folder does not exist yet
                try {
                    yield mkdirPromisified(this.nodePath);
                }
                catch (e) {
                    console.log(e);
                    // This folder does not exist yet
                    throw new Error('cannot_make_temp_node_folder');
                }
            }
        });
    }
    writeToTempFolder(encoding = 'utf8') {
        return __awaiter(this, void 0, void 0, function* () {
            return writeFilePromisified(this.filePath, this.buffer, encoding);
        });
    }
    createRepositoryFolder() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield statPromisified(this.repositoriesPath);
            }
            catch (e) {
                // This folder does not exist yet
                try {
                    yield mkdirPromisified(this.repositoriesPath);
                }
                catch (e) {
                    console.log(e);
                    // This folder does not exist yet
                    throw new Error('cannot_make_repositories_folder');
                }
            }
        });
    }
    retrieveBufferFromTemp() {
        return __awaiter(this, void 0, void 0, function* () {
            return readFilePromisified(this.filePath);
        });
    }
    saveTempToRepositoryFolder(encoding = 'utf8', buffer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.buffer) {
                    buffer = yield this.retrieveBufferFromTemp();
                }
            }
            catch (e) {
                return {
                    path: this.repositoriesFilePath,
                    filename: this.filename,
                    operation: 'save',
                    success: false,
                };
            }
            try {
                if (!this.repositoriesPath) {
                    throw new Error('repositories_path_not_set');
                }
                try {
                    yield statPromisified(this.repositoriesFilePath);
                    // File by this name already exists, increment copy number
                    this.incrementCopyNumber();
                    yield writeFilePromisified(this.repositoriesFilePath, buffer, encoding);
                    return {
                        path: this.repositoriesFilePath,
                        filename: this.filename,
                        operation: 'save',
                        success: true,
                    };
                }
                catch (e) {
                    // file does not exist
                    try {
                        yield writeFilePromisified(this.repositoriesFilePath, buffer, encoding);
                        return {
                            path: this.repositoriesFilePath,
                            filename: this.filename,
                            operation: 'save',
                            success: true,
                        };
                    }
                    catch (e) {
                        console.log(e);
                        throw new Error('unable_to_save');
                    }
                }
            }
            catch (e) {
                return {
                    path: this.repositoriesFilePath,
                    filename: this.filename,
                    operation: 'save',
                    error: e.message,
                    success: false,
                };
            }
        });
    }
    deleteFromRepositoryFolder() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.repositoriesPath) {
                    throw new Error('repositories_path_not_set');
                }
                try {
                    yield deleteFilePromisified(this.repositoriesFilePath);
                }
                catch (e) {
                    throw new Error('unable_to_delete');
                }
                return {
                    path: this.repositoriesFilePath,
                    filename: this.filename,
                    operation: 'delete',
                    success: true,
                };
            }
            catch (e) {
                return {
                    path: this.repositoriesFilePath,
                    filename: this.filename,
                    operation: 'delete',
                    error: e.message,
                    success: false,
                };
            }
        });
    }
    removeNodeFolder() {
        return rmdirPromisified(this.nodePath, { recursive: true });
    }
    // Change filename.txt to filename(1).txt
    incrementCopyNumber() {
        let filenameBase = file_utility_functions_1.getFilenameBase(this.filename);
        if (this.hasCopyNumber(filenameBase)) {
            const int = parseInt(filenameBase[filenameBase.length - 2]);
            filenameBase = file_utility_functions_1.replaceStringIndexAt(filenameBase, filenameBase.length - 2, (int + 1).toString());
            this.filename = filenameBase + '.' + file_utility_functions_1.getExtension(this.filename);
        }
        else {
            this.filename =
                filenameBase +
                    `(${Math.floor(Date.now() / 1000)}).` +
                    file_utility_functions_1.getExtension(this.filename);
        }
    }
    hasCopyNumber(str) {
        if (str.length <= 3) {
            return false;
        }
        if (str[str.length - 1] !== ')') {
            return false;
        }
        if (!lodash_1.isInteger(str[str.length - 2])) {
            return false;
        }
        if (str[str.length - 3] !== '(') {
            return false;
        }
        return true;
    }
}
module.exports = FileUtility;
