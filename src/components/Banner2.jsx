export default function Banner2 ({data}) {
    return (
        <div className="banner-container"
            style={{"backgroundColor": data.bgColor, "color": data.fontColor}}>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
        </div>
    )
}