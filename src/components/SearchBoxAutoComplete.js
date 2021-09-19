import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBox = (props) => {
    return (
        <div>
            <Autocomplete
                freeSolo
                options={props.movies.map((option) => option.Title)}
                onChange={(event, value) => props.setSearchValue(value)}
                renderInput={(params) => (
                    <TextField
                        style={{background: 'white', width: '20rem'}}
                        value={props.searchValue}
                        {...params} placeholder="Search movies.."
                    />
                )}
            />
        </div>
    );
}

export default SearchBox;