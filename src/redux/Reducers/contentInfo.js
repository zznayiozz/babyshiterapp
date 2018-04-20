import { actionText } from './../Action/index'

const ImageLegnth = [
    require('./../../images/picture_01.png'),
    require('./../../images/picture_02.png'),
    require('./../../images/picture_01.png'),
    require('./../../images/picture_02.png'),
    require('./../../images/picture_01.png'),
];


const defaultState = {
    urlSlider   :  ImageLegnth,
    title       : 'Fin your true baby sitter !',
    descript    : `Use this app when you want to find a \n shitters and hellp you to take case of your \n childrens. Its just steps for you to follow.`,
};

const contentInfo = (state = defaultState, action) => {
    return state;
}

export default contentInfo;