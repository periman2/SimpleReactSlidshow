
var React  = require("react");
var ReactDOM = require("react-dom");
var Show = require("./shows");
var shows = require("./showslist");

var Shows = function(props){
    return (
        <div>
            <Show show={props.show} showIndex={0} />
            <Show show={props.show} showIndex={0} />
            <Show show={props.show} showIndex={0} />
        </div>
    );
}

ReactDOM.render(
    <Show show={shows} />, 
    document.getElementById("root")
);
