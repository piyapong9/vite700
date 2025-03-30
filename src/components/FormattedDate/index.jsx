const FormattedDate = ({ isHighLight, children }) => {
    return (
    <div>
        <span className={`text-sm font-medium ${isHighLight ?"hover:text-PrimaryTitle":""}`}>
            {children}
        </span>
    </div>
    )
}

export default FormattedDate;