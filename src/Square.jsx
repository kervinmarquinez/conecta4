
export const Square = ({children, isSelected, updateBoard}) => {

    const className= `square ${isSelected ? 'is-selected' : ''}`
  
    return (
        <div className={className}>
            {children}
        </div>
    )
  }
