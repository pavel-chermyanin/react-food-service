import { useState } from "react"




const Search = ({ cb = Function.prototype }) => {
    const [value, setValue] = useState('')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
    const handleSubmit = () => {
        cb(value)
    }

    const handleOnChange = (e) => {
        setValue(e.target.value)
        cb(e.target.value)
    }

    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    type="search"
                    id="search-field"
                    placeholder="search"
                    onKeyDown={handleKey}
                    onChange={handleOnChange}
                    value={value}
                />
                <button
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0
                    }}
                    onClick={handleSubmit}
                    className="btn">Search</button>
            </div>
        </div>
    )
}

export default Search