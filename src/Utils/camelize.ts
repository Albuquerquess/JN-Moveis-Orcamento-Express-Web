const camelize = (str: string) => {
    let finalStr: string = ''
    str.split(' ').forEach((char: string) => {
        if (char.split('').length > 2) {
            finalStr = finalStr + ' ' + char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
        } else {
            finalStr = finalStr + ' ' + char.toLowerCase()
        }
    })

    return finalStr
  }

export default camelize
