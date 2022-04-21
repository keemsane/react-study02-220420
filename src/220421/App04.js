import React from "react";
import '../../src/App.css';

// 문제 1) class 형 컴포넌트 App04를 생성
//       → 화면에 현재 채널, 볼륨을 표시, 볼륨 up / down, 채널 up / down 버튼 생성
//       → 버튼 클릭시마다 현재 채널 및 볼륨의 크기가 변경되는 프로그램 작성
// 참고 1) 볼륨은 0 ~ 15. 0 미만 X, 15 초과 X
// 참고 2) 채널은 1 ~ 15, 1 이하로 내려가면 최댓값 15 출력, 15이상 올라가면 1이 출력
// 참고 3) 각각 볼륨 및 채널은 1씩 변경

class App04 extends React.Component {
    state = {
        channel : 1,
        volume : 0,
    }
    chup = () => {
        if (this.state.channel > 14) {
            this.setState({ channel : this.state.channel = 1 })
        } else {
            this.setState({ channel : this.state.channel + 1 })
        }        
    };
    chdown = () => {
        if (this.state.channel < 2) {
            this.setState ({ channel : this.state.channel = 15 })
        } else {
            this.setState({ channel : this.state.channel - 1 })
        }
    };
    volup = () => {
        if (this.state.volume >= 15) {
            this.setState({ volume : this.state.volume = 15})
        } else {
            this.setState({ volume : this.state.volume + 1})
        }
    };
    voldown = () => {
        if (this.state.volume <= 0) {
            this.setState({ volume : this.state.volume = 0})
        } else {
            this.setState({ volume : this.state.volume - 1})
        }
    };
    render() {
        return (
            <div>
                <h1>CHANNEL {this.state.channel}</h1>
                <h2>VOLUME {this.state.volume}</h2>
                <div>
                    <button onClick={this.chup}> + CH UP </button>
                    <button onClick={this.chdown}> - CH DOWN </button>
                </div>
                <div>
                    <button onClick={this.volup}> + VOL UP </button>
                    <button onClick={this.voldown}> - VOL DOWN </button>
                </div>
            </div>
        );
    }
}
export default App04;