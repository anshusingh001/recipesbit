import styled from "styled-components"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"


const Search = () => {
    const navigate=useNavigate();
    const [item, setItem] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${item}`)
    }
    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input
                    placeholder="Search dishes..."
                    onChange={(e) => setItem(e.target.value)} type="text"
                    value={item} />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;

    div{
        position: relative;
        width: 100%;
    }
    input{
        border: none;
        background: linear-gradient(35deg,#494949,#313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%,-50%);
        color: white;
    }
`
export default Search;
