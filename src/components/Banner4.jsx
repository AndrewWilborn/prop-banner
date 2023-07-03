export default function Banner4({n, wrapperText, data:{title, bgColor, fontColor, content}}){

    return(
        <div className="banner-container" style={{"backgroundColor": bgColor, "color": fontColor}}>
            <h2>{title}</h2>
            <p>{wrapperText}</p>
            <p>{n}</p>
            <p>{content}</p>
        </div>
    )
}