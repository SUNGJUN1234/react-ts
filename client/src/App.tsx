import React, {Component, Fragment} from 'react';
import LifeCycle from "./LifeCycle";
import MyComponent from "./MyComponent";

class App extends Component {

    state = {
        counter: 1,
        error: false
    }
    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    // 컴포넌트에 에러 발생시 사용 가능
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // API 를 사용해 서버로 오류 내용 날리기 가능
        console.log(error);
        console.log(errorInfo);
        this.setState({
            error: true,
        })
    }

    render() {
        if(this.state.error){
            return (
                <div>에러가 났어요!</div>
            )
        }
        return (
            <Fragment>
                <LifeCycle />
                {this.state.counter !== 2 && <MyComponent value={this.state.counter} />}
                <button onClick={this.handleClick}>Click Me</button>
            </Fragment>
        );
    }
}

export default App;