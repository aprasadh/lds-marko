export const spriteCategory = {
        "action" : "/static/assets/icons/action-sprite/svg/symbols.svg",
        "custom" : "/static/assets/icons/custom-sprite/svg/symbols.svg",
        "doctype" : "/static/assets/icons/doctype-sprite/svg/symbols.svg",
        "standard" : "/static/assets/icons/standard-sprite/svg/symbols.svg",
        "utility" : "/static/assets/icons/utility-sprite/svg/symbols.svg"
};

export default function getSpriteURL(category, name){
    return spriteCategory[category] + "#" + name;
}

export class Sprite{
    constructor(category, name){
        this.category = category;
        this.name = name;
    }

    getSpriteURL(category, name){
        return spriteCategory[this.category] + "#" + this.name.replace("-", "_");
    }
}