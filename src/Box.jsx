import './Box.css'

function Box({color}) {
    const style = {
        backgroundColor: color
    }

    return <div style={style} className="Box"></div>
}

export default Box;