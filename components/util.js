export function isBlank(value){
    if(value === null){
        return true;
    }
    if(value.trim() === ""){
        return true;
    }

    return false;
}