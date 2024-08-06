import React, {Component} from 'react';

interface Props {
    value: number;
}

interface State {
    value: number;
}

class MyComponent extends Component<Props, State> {
    state = {
        value: 0
    };

    static getDerivedStateFromProps(nextProps: Props, prevState: State) {
        // 여기서는 setState 를 하는 것이 아니라
        // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
        // 사용됩니다.
        // return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
        if (prevState.value !== nextProps.value) {
            return {
                value: nextProps.value
            };
        }
        // 반드시 null을 반환하여 상태가 변경되지 않도록 합니다.
        return null;
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
        if (this.props.value !== prevProps.value) {
            console.log("value 값이 바뀌었다.", this.props.value);
        }
    }

    // getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    //     // DOM 업데이트가 일어나기 직전의 시점입니다.
    //     // 새 데이터가 상단에 추가되어도 스크롤바를 유지해보겠습니다.
    //     // scrollHeight 는 전 후를 비교해서 스크롤 위치를 설정하기 위함이고,
    //     // scrollTop 은, 이 기능이 크롬에 이미 구현이 되어있는데,
    //     // 이미 구현이 되어있다면 처리하지 않도록 하기 위함입니다.
    // }

    // 특정 조건에 따라 랜더링을 막아줄 수 있는 함수
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
        // return false 하면 업데이트를 안함
        if (nextProps.value === 5) return false;
        console.log("componentUpdate");
        return true;
    }

    componentWillUnmount() {
        console.log("good bye");
    }

    render() {
        return (
            <div>
                {/*에러 테스트*/}
                {/*{this.props.missing.something}*/}
                <p>props: {this.props.value}</p>
                <p>state: {this.state.value}</p>
            </div>
        );
    }
}

export default MyComponent;