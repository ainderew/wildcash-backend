const getDate = () => {

    const d = new Date();

    const month = d.getMonth();
    const day = d.getDate();
    const year = d.getFullYear();

    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
    const dateNow = `${monthArray[month]} ${day}, ${year}`

    return dateNow
}


module.exports = {getDate}