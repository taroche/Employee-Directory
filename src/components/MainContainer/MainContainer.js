import React, { Component } from 'react'
import SearchBar from '../SearchBar/Searchbar'
import EmployeeTable from '../EmployeeTable/EmployeeTable'
import API from '../../utils/API'
import Wrapper from '../Wrapper/Wrapper';

class MainContainer extends Component {
    state = {
        employees: [],
        search: '',
        filteredEmployees: [],
        sorting: this.initialsorting,
    };


    get initialsorting() {
        return {
            name: "",
            phone: "",
            email: "",
            dob: "",
        };
    }