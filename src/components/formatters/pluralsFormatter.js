const pluralsFormatter = (count, label) => {
    return `${count} ${label.value}${count > 1 ? `${label.plural}` : ''}`
}

export default pluralsFormatter