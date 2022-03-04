export function isUrl(str) {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator
    return !!pattern.test(str)
  }
  
  export function getFilenameBase(filename) {
    const pos = filename.lastIndexOf('.') // gets the last position of `.`
  
    if (filename === '' || pos < 1)
      // if the file name is empty or ...
      return '' // the dot not found (-1) or comes first (0)
    return filename.slice(0, pos) // extracts extension ignoring "."
  }
  
  export function getExtension(path) {
    const baseName = path.split(/[\\/]/).pop(), // extracts file name from full path
      // (supports separators `\\` and `/`)
      pos = baseName.lastIndexOf('.') // gets the last position of `.`
    if (baseName === '' || pos < 1)
      // if the file name is empty or ...
      return '' // the dot not found (-1) or comes first (0)
    return baseName.slice(pos + 1) // extracts extension ignoring "."
  }
  
  export function replaceStringIndexAt(
    str: string,
    index: number,
    replacement: string
  ) {
    return (
      str.substr(0, index) + replacement + str.substr(index + replacement.length)
    )
  }
  