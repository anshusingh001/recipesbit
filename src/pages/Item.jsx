import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import styled from 'styled-components';

const Item = () => {

    const param = useParams();
    const [searchedrecipe,setSearchedrecipe]=useState([]);

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearchedrecipe(recipes.results);
    }
    useEffect(() => {
        getSearched(param.item)
    }, [param.item]);


  return (
    <Grid>
    {searchedrecipe.map((recipe)=>{
        return(
            <Card key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image}
                alt=''/>
                <h4>{recipe.title}</h4>
                </Link>
            </Card>
        )
    })}
   </Grid>
  )
}
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
       width : 100%;
       border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding : 1rem;
    }
`;

export default Item
