import router from "./signUpRoute";
import { loginAuthentication } from "../ middlewares/login/index";
import { loginController } from "../controllers/login/loginController";

router.get('/', loginAuthentication, loginController);

export default router;