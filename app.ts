import { EmailValidator } from ".";
import * as types from "./types";

let email : types.str = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);
console.log(result);