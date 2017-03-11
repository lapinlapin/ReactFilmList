let priorField;
export const generateId = () => Math.round(Math.random() * 10000000);

export const sortArrayOfColumn = (arr, field) => {
    let sortFlag = 1;
    if (arr && arr.length) {

        if (priorField === field) {
            sortFlag = -sortFlag;
            priorField = undefined;
        } else {
            priorField = field;
        }

        return arr.sort((a, b) => {
            if (a[field] > b[field]) return sortFlag;
            if (a[field] < b[field]) return -sortFlag;
            return 0;
        });
    }
};

export const filteredArrayOfName = (arr, str) => {
    return arr.filter(item => {
        return item.name.toLowerCase().indexOf(str) > -1;
    });
};

export const resetData = (data) => {
    Object.keys(data).forEach((key) => {
        data[key] = '';
    });
};
