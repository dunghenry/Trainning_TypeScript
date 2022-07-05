import {TYPE_LOG} from './types'
import * as types from './types'
function logger(message: string, type: types.Log) {
    console[type](message);
}

export default logger;