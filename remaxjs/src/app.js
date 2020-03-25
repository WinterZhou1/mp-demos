import './app.css';

import 'umtrack-wx';
import { uma } from './components';
uma().init({
      appKey: '', //由友盟分配的APP_KEY
      useOpenid: false, // 是否使用openid进行统计，此项为false时将使用友盟+随机ID进行用户统计。使用openid来统计微信小程序的用户，会使统计的指标更为准确，对系统准确性要求高的应用推荐使用OpenID。
      autoGetOpenid: false, // 是否需要通过友盟后台获取openid，如若需要，请到友盟后台设置appId及secret
      debug: true //是否打开调试模式
});

// import 'umtrack-alipay';
// import { uma } from '@/components';
// uma.init({
//   appKey: '', //由友盟分配的APP_KEY
//   debug: true //是否打开调试模式
// });
const App = props => props.children;

export default App;
