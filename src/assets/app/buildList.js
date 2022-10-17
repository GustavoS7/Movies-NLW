var options = ''

const buildList = (array) => {
  for (let item of array) {
    let itemList = `
    <option value="${item.title}">${item.title}</option>
    `

    options += itemList
  }
  return options
}

export { buildList }