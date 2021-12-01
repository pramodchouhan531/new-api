import {GET_BOOKS,GET_CHARACTER,GET_MOVIE, GET_QUOTES, SET_CHARACTER_FILTER, SET_MOVIE_FILTER}from "../actions/actiontype"


export const getbooks =(books)=>({
   type:GET_BOOKS,
   books
});

export const getmoves =(movie)=>({
    type:GET_MOVIE,
    movie,
 });
 export const getcharacter =(character)=>({
    type:GET_CHARACTER,
    character
 });
 export const getquotes =(quotes)=>({
    type:GET_QUOTES,
    quotes
 });
 export const getcharacterfilter =(filter)=>({
   type:SET_CHARACTER_FILTER,
   filter
});
export const getmoviefilter =(filter)=>({
   type:SET_MOVIE_FILTER,
   filter
});