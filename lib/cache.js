"use strict";
/**
 * the file contains all the functions related to the disk writing for the db
 */

const fs = require("fs");
const path = require("path");

// any object for holding all the functions
let lib = {};

if (!fs.existsSync(path.resolve(`${__dirname}/../.data`))) {
  fs.mkdirSync(path.resolve(`${__dirname}/../.data`));
}
/**
 * the method to create a file for the record on the disk
 * @param  {String}   dir    the collection of the documents
 * @param  {String}   record the document that is to be stored
 * @param  {Object}   data   the data that is to stored on the disk
 * @param  {Function} cb     the function that is to be called once the work is complete
 *                    1 err: the error in save
 *                    2 data: the data that is saved
 * @return {NULL}
 */
lib.create = (dir, record, data, cb = () => {}) => {
  const isDir = fs.existsSync(path.resolve(`${__dirname}/../.data/${dir}`));
  if (isDir) {
    fs.writeFile(
      path.resolve(`${__dirname}/../.data/${dir}/${record}.html`),
      data,
      err => {
        if (err) cb(err);
        else cb(null, data);
      }
    );
  } else {
    fs.mkdir(path.resolve(`${__dirname}/../.data/${dir}`), function(err) {
      if (err) cb(err, null);
      else {
        fs.writeFile(
          path.resolve(`${__dirname}/../.data/${dir}/${record}.html`),
          data,
          err => {
            if (err) cb(err);
            else cb(null, data);
          }
        );
      }
    });
  }
};
/**
 * the method to delete a record on disk
 * @param  {String}   dir    the collection from which document is to be deleted
 * @param  {String}   record the document which is to be deleted
 * @param  {Function} cb     the the function that is to invoked upon compeletion of task
 *                    1 err: the error in save
 *                    2 data: the data that is saved
 * @return {NULL}
 */
lib.delete = (dir, record, cb) => {
  const isDir = fs.existsSync(path.resolve(`${__dirname}/../.data/${dir}`));
  if (isDir) {
    fs.unlink(
      path.resolve(`${__dirname}/../.data/${dir}/${record}.html`),
      err => {
        cb(err, {
          message: "sucess"
        });
      }
    );
  } else {
    cb("delete failed no such directory or file exists");
  }
};
/**
 * the method to read the document for the disk
 * @param  {String}   dir    the collection fromwhich the document is to be readed
 * @param  {String}   record the document which is to read
 * @param  {Function} cb     the function that is to be invoked upon completion
 *                    1 err: the error in save
 *                    2 data: the data that is saved
 * @return {NULL}
 */
lib.read = (dir, record, cb) => {
  const isDir = fs.existsSync(path.resolve(`${__dirname}/../.data/${dir}`));
  if (isDir) {
    fs.readFile(
      path.resolve(`${__dirname}/../.data/${dir}/${record}.html`),
      (err, data) => {
        if (err) cb(err, null);
        else cb(err, data.toString("utf-8"));
      }
    );
  } else {
    cb("no such file or directory exists");
  }
};
/**
 * the method to update the document on the disk
 * @param  {String}   dir    the collection of the document
 * @param  {String}   record the document which is needed to be updated
 * @param  {Object}   data   the updates to the document
 * @param  {Function} cb     the function that it to be invoked upon compeletion
 *                    1 err: the error in save
 *                    2 data: the data that is saved
 * @return {NULL}
 */
lib.update = (dir, record, data, cb) => {
  lib.read(dir, record, (err, oldData) => {
    if (err) cb(err, null);
    else {
      lib.create(
        dir,
        record,
        {
          ...oldData,
          ...data
        },
        (err, data) => {
          if (err) cb(err, null);
          else cb(err, data);
        }
      );
    }
  });
};
/**
 * all the function realated to writing to disk
 * @type {Object}
 */
module.exports = lib;
