import React, {useState} from "react";
import loadable from '@loadable/component';
import "./App.css";
import SampleContainer from "./containers/SampleContainer";
import UsersContainer from "./containers/UsersContainer";

function App() {
    const [visible, setVisible] = useState();

    // const SplitMe = React.lazy(() => import('./SplitMe'))
    const SplitMe = loadable(() => import('./SplitMe'), {
        fallback: <div>loading...</div>
    });

    const onClick = () => {
        setVisible(true)
    }

    const onMouseOver = () => {
        SplitMe.preload();
    }

    return (
        <div className="App">
            <p>userContainer</p>
            <UsersContainer/>

            {visible && <SplitMe/>}
            <button onClick={onClick} onMouseOver={onMouseOver}>NOTIFY</button>
            <SampleContainer/>

        </div>
    );
}

export default App;
