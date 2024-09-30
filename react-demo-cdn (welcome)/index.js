const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        let text = "liked";
        if (this.state.liked) {
            text = "sudah dilike. batalkan?";
        } else {
            // jika belum di like, maka bisa click "like" lagi.
            text = "like";
        }
        return e(
            "button",
            { onClick: () => this.setState({ liked: !this.state.liked }) },
            text
        );
    }
}

const domContainer = document.querySelector("#button");
ReactDOM.render(e(LikeButton), domContainer);