function Random (props) {
    const randomNum = () => {
        return Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
    }
    return (
        <div className="random">
      <p>Random value between {props.min} and {props.max} => {randomNum()}</p>
    </div>
    );
}

export default Random;