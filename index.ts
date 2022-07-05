// import { StringValidator } from "./main"
import { Validator } from "./main"
class EmailValidator implements Validator{
    isValid(s: string): boolean{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }

}
export {EmailValidator }
// export default Validator;
