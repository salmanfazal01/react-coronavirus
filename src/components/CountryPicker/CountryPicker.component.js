import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl} from "@material-ui/core";

import './CountryPicker.styles.css';

const CountryPicker = () => {
    return (
        <div>
            <FormControl className="formControl">
                <NativeSelect>
                    <option value="global">Global</option>
                </NativeSelect>
            </FormControl>
        </div>
    )
};

export default CountryPicker;