const SectionHeader = ({ sectionName, title, children }) => {
    return (
        <div className={`${sectionName}__header`}>
            <h2 className="title">{title}</h2>
            {children}
            <hr />
        </div>
    )
}

export default SectionHeader;