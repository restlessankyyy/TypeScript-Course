export const dataStringToDate = (dateString: string): Date => {
    const dateParts = dateString.split('/').map(value => parseInt(value));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};