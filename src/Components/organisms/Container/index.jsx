const Container = ({ children, pageClass = "" }) => {
    return (
        <section className={`container ${pageClass}`}>
            {children}
        </section>
    )
}

export default Container;