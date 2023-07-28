import './App.css';
import Routes from './Routes';
import { ReactSlackChat } from 'react-slack-chat';
import './store'
//some other day this baby
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes />
      <ReactSlackChat
        botName='user_id: 189789'
        apiToken='eG94Yi01NTM5ODMwMzYyOTQ5LTU1MjgyMzc1ODMyMjMtZVlzVGpNNVVJSklkNFR1UjBvUHllT3Ex'
        channels={[
          {
            name: 'general'
          }]}
        helpText='How may I help You ?'
        themeColor='#856090'
        userImage='http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg'
        debugMode={true}
        hooks={[
        ]}
      />
    </>
  );
}

export default App;
