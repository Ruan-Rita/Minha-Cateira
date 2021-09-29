const formatDate = (date: string ) : string => {
    const dateFormatted = new Date(date)
    const day = dateFormatted.getDay();
    const month = dateFormatted.getMonth() + 1;
    const year = dateFormatted.getFullYear()
    
    return `${day < 10  ? "0" : ''}${day}/${month < 10  ? "0" : ''}${month}/${year}`;
}
export default formatDate;