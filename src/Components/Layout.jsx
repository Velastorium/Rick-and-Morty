import LayoutS from "./Layout.module.css";

const Layout = ({ titleColor, color, bgColor, title, subtitle, texto, img, Width, align = "left" }) => {
    const isLeftAligned = align === "left";

    return (
        <div className={`${LayoutS.Content} ${isLeftAligned ? LayoutS.leftAlign : LayoutS.rightAlign}`} style={{ backgroundColor: bgColor }}>
            <div className={`${LayoutS.Izquierdo} ${isLeftAligned ? LayoutS.textLeft : LayoutS.textRight}`} style={{ color: color }}>
                <div className={LayoutS.ContGrande}>
                    <div className={LayoutS.TitleCont}>
                        <h1 className={LayoutS.title} style={{ color: titleColor }}>{title}</h1>
                    </div>
                    {subtitle && <p className={LayoutS.subtitle}>{subtitle}</p>}
                    <p className={LayoutS.texto}>{texto}</p>
                </div>
            </div>
            {img && (
                <div className={LayoutS.Derecho}>
                    <div className={LayoutS.ContectImg}>
                        <img src={img} alt="Image Description" style={{ width: Width }} />
                    </div>
                </div>
            )}
        </div>
    );
}


export default Layout;
