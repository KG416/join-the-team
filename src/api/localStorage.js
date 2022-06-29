async function save(collection, value) {
    return window.localStorage.setItem(collection, JSON.stringify(value))
}

async function read(collection) {
    return JSON.parse(window.localStorage.getItem(collection))
}

export async function readTeamMembers() {
    return read('teamMembers')
}

export async function saveTeamMembers(teamMembers) {
    return save('teamMembers', teamMembers)
}