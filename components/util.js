exports.isBlank = (value) => {
    if(value === null){
        return true;
    }
    if(value.trim() === ""){
        return true;
    }

    return false;
};

exports.isObjectEmpty = (obj) =>{
    if(obj === null || obj === undefined)
        return true;

    if(Object.keys(obj).length === 0 && obj.constructor === Object){
        return true;
    }else{
        return false;
    }
};
