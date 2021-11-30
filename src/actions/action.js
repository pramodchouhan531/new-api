import {GET_BOOKS,GET_CHARACTER,GET_MOVIE, GET_QUOTES}from "../actions/actiontype"


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