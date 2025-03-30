const Tach = ({isHighLight, data}) => {
  return (
    <div className="flex gap-4 text-sm">
    {
        data.map((e, i) => (
            <div key={`${e}-tech-${i}`} className={`bg-PrrimaryBase px-2 py-1 rounded-md ${isHighLight ? "hover:text-PrimaryTitle" : ""} `}>React</div>
        ))
    }
    </div>
  )
}

export default Tach;