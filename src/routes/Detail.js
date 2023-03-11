import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
        return <span>{location.state.title}</span>; //제목 불러오기
        } else {
            return null;
        }
    }
}

export default Detail;