import { Router } from 'express';
import swaggerUi from 'express-swaggerize-ui';
import UsuarioController from './app/controllers/UsuarioController';
import PessoaController from './app/controllers/PessoaController';
import Cartaocontroller from './app/controllers/CartaoController';
import SituacaoController from './app/controllers/SituacaoController';
import DividaController from './app/controllers/DividaController';
import ParcelaController from './app/controllers/ParcelaController';
import PerfilUsuarioController from './app/controllers/PerfilUsuarioController';
import AmountController from './app/controllers/AmountController';

const routes = new Router();

routes.use('/api-docs', swaggerUi());

routes.get('/usuarios', UsuarioController.index);

routes.get('/pessoas', PessoaController.index);

routes.get('/cartoes', Cartaocontroller.index);

routes.get('/situacoes', SituacaoController.index);

routes.get('/dividas', DividaController.index);

routes.get('/parcelas', ParcelaController.index);

routes.get('/perfilUsuarios', PerfilUsuarioController.index);

routes.get('/amounts', AmountController.index);

export default routes;
