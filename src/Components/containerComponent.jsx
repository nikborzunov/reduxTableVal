import React from "react"
import {connect} from "react-redux";
import {
    changeTablesValue,
    setTable, updateTable, addNewUserAC, addNewUserSend,
    deleteUserFromTable, setTableAC,
} from "../Redux/profileReducer";
import ContentComponent from "./contentComponent";

class ContainerComponent extends React.Component {

    componentDidMount() {
        this.props.setTable()
    }


    updateJsonTable = (table, id) => {
        this.props.updateTable(table, id)
    }

    deleteUser = (table, id) => {
        this.props.deleteUserFromTable(table, id)
    }


    submit = (e) => {
        let Login = '';
        let Email = '';
        let Country = '';
        let Sex = '';
        let Age = '';


        if (e.Login) {
            Login = e.Login
        }

        if (e.Email) {

            Email = e.Email
        }

        if (e.Country) {
            Country = e.Country
        }

        if (e.Sex) {
            Sex = e.Sex
        }

        if (e.Age) {
            Age = e.Age
        }

        let id = this.props.table.length;
        this.props.addNewUserSend({Login, Email, Country, Sex, Age}, id)

    }


    changeInput = (value) => {

        let inputValue = value.target.value;
        let id = value.target.id;
        let name = value.target.name;

        if (!id) {
            this.props.addNewUserAC({inputValue, name})
        }

        this.props.changeTablesValue({inputValue, id, name})
    }

    render() {
        return <ContentComponent table={this.props.table}
                                 setTable={this.props.setTable}
                                 changeInput={this.changeInput}
                                 updateJsonTable={this.updateJsonTable}
                                 submit={this.submit}
                                 deleteUser={this.deleteUser}
                                 setTableAC={this.props.setTableAC}
        />
    }
}

const mapStateToProps = (state) => {

    return {
        table: state.profilePage.table,
    }
}

export default connect(mapStateToProps, {
    setTable,
    changeTablesValue,
    updateTable,
    addNewUserAC,
    addNewUserSend,
    deleteUserFromTable,
    setTableAC

})(ContainerComponent);



