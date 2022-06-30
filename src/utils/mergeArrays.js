function mergeArrays(...arrays) {
    const allArrays = [].concat(...arrays)
    const removeDuplicates = [...new Set(allArrays)]
    return removeDuplicates
}

export default mergeArrays