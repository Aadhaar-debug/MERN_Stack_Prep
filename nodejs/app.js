// REPL read-eval-print-loop 0Practice 
// PS C:\Users\ACER\Desktop\MERN_Stack_Prep\nodejs> node .\app.js
// PS C:\Users\ACER\Desktop\MERN_Stack_Prep\nodejs> node 
// Welcome to Node.js v20.17.0.
// Type ".help" for more information.
// > .help
// .break    Sometimes you get stuck, this gets you out
// .clear    Alias for .break
// .editor   Enter editor mode
// .exit     Exit the REPL
// .help     Print this help message
// .load     Load JS from a file into the REPL session
// .save     Save all evaluated commands in this REPL session to a file

// Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
// > .exit
// PS C:\Users\ACER\Desktop\MERN_Stack_Prep\nodejs> node
// Welcome to Node.js v20.17.0.
// Type ".help" for more information.
// > cosnt a = 10
// cosnt a = 10
//       ^

// Uncaught SyntaxError: Unexpected identifier 'a'
// > const a = 10
// undefined
// > const b = 20
// undefined
// > console.log(a)
// 10
// undefined
// > console.log(a+b)
// 30
// undefined
// > console.log(fs)
// {
//   appendFile: [Function: appendFile],
//   appendFileSync: [Function: appendFileSync],
//   access: [Function: access],
//   accessSync: [Function: accessSync],
//   chown: [Function: chown],
//   chownSync: [Function: chownSync],
//   chmod: [Function: chmod],
//   chmodSync: [Function: chmodSync],
//   close: [Function: close],
//   closeSync: [Function: closeSync],
//   copyFile: [Function: copyFile],
//   copyFileSync: [Function: copyFileSync],
//   cp: [Function: cp],
//   cpSync: [Function: cpSync],
//   createReadStream: [Function: createReadStream],
//   createWriteStream: [Function: createWriteStream],
//   exists: [Function: exists],
//   existsSync: [Function: existsSync],
//   fchown: [Function: fchown],
//   fchownSync: [Function: fchownSync],
//   fchmod: [Function: fchmod],
//   fchmodSync: [Function: fchmodSync],
//   fdatasync: [Function: fdatasync],
//   fdatasyncSync: [Function: fdatasyncSync],
//   fstat: [Function: fstat],
//   fstatSync: [Function: fstatSync],
//   fsync: [Function: fsync],
//   fsyncSync: [Function: fsyncSync],
//   ftruncate: [Function: ftruncate],
//   ftruncateSync: [Function: ftruncateSync],
//   futimes: [Function: futimes],
//   futimesSync: [Function: futimesSync],
//   lchown: [Function: lchown],
//   lchownSync: [Function: lchownSync],
//   lchmod: undefined,
//   lchmodSync: undefined,
//   link: [Function: link],
//   linkSync: [Function: linkSync],
//   lstat: [Function: lstat],
//   lstatSync: [Function: lstatSync],
//   lutimes: [Function: lutimes],
//   lutimesSync: [Function: lutimesSync],
//   mkdir: [Function: mkdir],
//   mkdirSync: [Function: mkdirSync],
//   mkdtemp: [Function: mkdtemp],
//   mkdtempSync: [Function: mkdtempSync],
//   open: [Function: open],
//   openSync: [Function: openSync],
//   openAsBlob: [Function: openAsBlob],
//   readdir: [Function: readdir],
//   readdirSync: [Function: readdirSync],
//   read: [Function: read],
//   readSync: [Function: readSync],
//   readv: [Function: readv],
//   readvSync: [Function: readvSync],
//   readFile: [Function: readFile],
//   readFileSync: [Function: readFileSync],
//   readlink: [Function: readlink],
//   readlinkSync: [Function: readlinkSync],
//   realpath: [Function: realpath] { native: [Function (anonymous)] },
//   realpathSync: [Function: realpathSync] { native: [Function (anonymous)] },
//   rename: [Function: rename],
//   renameSync: [Function: renameSync],
//   rm: [Function: rm],
//   rmSync: [Function: rmSync],
//   rmdir: [Function: rmdir],
//   rmdirSync: [Function: rmdirSync],
//   stat: [Function: stat],
//   statfs: [Function: statfs],
//   statSync: [Function: statSync],
//   statfsSync: [Function: statfsSync],
//   symlink: [Function: symlink],
//   symlinkSync: [Function: symlinkSync],
//   truncate: [Function: truncate],
//   truncateSync: [Function: truncateSync],
//   unwatchFile: [Function: unwatchFile],
//   unlink: [Function: unlink],
//   unlinkSync: [Function: unlinkSync],
//   utimes: [Function: utimes],
//   utimesSync: [Function: utimesSync],
//   watch: [Function: watch],
//   watchFile: [Function: watchFile],
//   writeFile: [Function: writeFile],
//   writeFileSync: [Function: writeFileSync],
//   write: [Function: write],
//   writeSync: [Function: writeSync],
//   writev: [Function: writev],
//   writevSync: [Function: writevSync],
//   Dirent: [class Dirent],
//   Stats: [Function: Stats],
//   ReadStream: [Getter/Setter],
//   WriteStream: [Getter/Setter],
//   FileReadStream: [Getter/Setter],
//   FileWriteStream: [Getter/Setter],
//   _toUnixTimestamp: [Function: toUnixTimestamp],
//   Dir: [Getter/Setter],
//   opendir: [Getter/Setter],
//   opendirSync: [Getter/Setter],
//   F_OK: 0,
//   R_OK: 4,
//   W_OK: 2,
//   X_OK: 1,
//   constants: [Object: null prototype] {
//     UV_FS_SYMLINK_DIR: 1,
//     UV_FS_SYMLINK_JUNCTION: 2,
//     O_RDONLY: 0,
//     O_WRONLY: 1,
//     O_RDWR: 2,
//     UV_DIRENT_UNKNOWN: 0,
//     UV_DIRENT_FILE: 1,
//     UV_DIRENT_DIR: 2,
//     UV_DIRENT_LINK: 3,
//     UV_DIRENT_FIFO: 4,
//     UV_DIRENT_SOCKET: 5,
//     UV_DIRENT_CHAR: 6,
//     UV_DIRENT_BLOCK: 7,
//     EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
//     EXTENSIONLESS_FORMAT_WASM: 1,
//     S_IFMT: 61440,
//     S_IFREG: 32768,
//     S_IFDIR: 16384,
//     S_IFCHR: 8192,
//     S_IFIFO: 4096,
//     S_IFLNK: 40960,
//     O_CREAT: 256,
//     O_EXCL: 1024,
//     UV_FS_O_FILEMAP: 536870912,
//     O_TRUNC: 512,
//     O_APPEND: 8,
//     S_IRUSR: 256,
//     S_IWUSR: 128,
//     F_OK: 0,
//     R_OK: 4,
//     W_OK: 2,
//     X_OK: 1,
//     UV_FS_COPYFILE_EXCL: 1,
//     COPYFILE_EXCL: 1,
//     UV_FS_COPYFILE_FICLONE: 2,
//     COPYFILE_FICLONE: 2,
//     UV_FS_COPYFILE_FICLONE_FORCE: 4,
//     COPYFILE_FICLONE_FORCE: 4
//   },
//   promises: [Getter]
// }
// undefined
// > .exit
// PS C:\Users\ACER\Desktop\MERN_Stack_Prep\nodejs> 
function printline(){
    console.log("Hello world");
}
printline();