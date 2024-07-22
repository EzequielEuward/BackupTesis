

export const HeadStudio = () => {
    return (
        <>
            <div className="header">
                <div className="left">
                    <h1>Studio</h1>
                    <ul className="breadcrumb">
                        <li><a href="#">
                            Bienvenido
                        </a></li>
                        /
                        <li><a href="#" className="active">--NAME--</a></li>
                    </ul>
                </div>
                <a href="#" className="report">
                    <i className='bx bx-cloud-download'></i>
                    <span>Descargar CSV</span>
                </a>
            </div>
        </>
    )
}

export default HeadStudio
