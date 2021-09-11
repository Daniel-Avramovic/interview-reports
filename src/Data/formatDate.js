export const formatDate = (date) => {
    const dateOfBirth = new Date(date);
    return `${dateOfBirth.getDate()}.${dateOfBirth.getMonth()+1}.${dateOfBirth.getFullYear()}.`
}