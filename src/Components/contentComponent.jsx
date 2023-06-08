import React, {useState} from "react"
import s from './contentComponent.module.css'
import TrashIcon from "../icons/trashIcon";
import AddNewUserForm from "./AddNewUserForm/AddNewUserForm";
import {setTableAC} from "../Redux/profileReducer";

const ContentComponent = props => {

    const [allSortValues, setSorting] = useState({sortedUp: '', name: ''});

    const SortingTableFunc = (e, dir) => {

        let table = props.table;
        let sortedTable = table.slice()
        let name = e.target.textContent;

        console.log(allSortValues)

        if (name === 'Login') {
            if (!allSortValues.sortedUp) {
                props.setTableAC(sortedTable.sort((a, b) => {
                    setSorting({...allSortValues, sortedUp: true, name: 'Login'})
                    return a.Login.toLocaleLowerCase() < b.Login.toLocaleLowerCase()
                }))
            } else if (allSortValues.sortedUp === true && allSortValues.name === 'Login') {
                props.setTableAC(sortedTable.reverse());
                setSorting({...allSortValues, sortedUp: false, name: 'none'})
            } else if (allSortValues.sortedUp === true && allSortValues.name !== 'Login') {
                props.setTableAC(sortedTable.sort((a, b) => {
                    setSorting({...allSortValues, sortedUp: true, name: 'Login'})
                    return a.Login.toLocaleLowerCase() < b.Login.toLocaleLowerCase()
                }))
            }


        } else if (name === 'Email') {
            if (!allSortValues.sortedUp) {
                props.setTableAC(sortedTable.sort((a, b) => {
                    setSorting({...allSortValues, sortedUp: true, name: 'Email'})
                    return a.Email.toLocaleLowerCase() < b.Email.toLocaleLowerCase()
                }))
            } else if (allSortValues.sortedUp === true && allSortValues.name === 'Email') {
                props.setTableAC(sortedTable.reverse());
                setSorting({...allSortValues, sortedUp: false, name: 'none'})
            } else if (allSortValues.sortedUp === true && allSortValues.name !== 'Email') {
                props.setTableAC(sortedTable.sort((a, b) => {
                    setSorting({...allSortValues, sortedUp: true, name: 'Email'})
                    return a.Email.toLocaleLowerCase() < b.Email.toLocaleLowerCase()
                }))
            }
        } else if (name === 'Country') {
            if (!allSortValues.sortedUp) {
                props.setTableAC(sortedTable.sort((a, b) => {
                    setSorting({...allSortValues, sortedUp: true, name: 'Country'})
                    return a.Country.toLocaleLowerCase() < b.Country.toLocaleLowerCase()
                }))
            } else if (allSortValues.sortedUp === true && allSortValues.name === 'Country') {
                props.setTableAC(sortedTable.reverse());
                setSorting({...allSortValues, sortedUp: false, name: 'none'})
            } else if (allSortValues.sortedUp === true && allSortValues.name !== 'Country') {
                props.setTableAC(sortedTable.sort((a, b) => {
                    setSorting({...allSortValues, sortedUp: true, name: 'Country'})
                    return a.Country.toLocaleLowerCase() < b.Country.toLocaleLowerCase()
                }))
            }
        } else if (name === 'Sex') {
            if (!allSortValues.sortedUp) {
                props.setTableAC(sortedTable.sort((a, b) => {
                    setSorting({...allSortValues, sortedUp: true, name: 'Sex'})
                    return a.Sex.toLocaleLowerCase() < b.Sex.toLocaleLowerCase()
                }))
            } else if (allSortValues.sortedUp === true && allSortValues.name === 'Sex') {
                props.setTableAC(sortedTable.reverse());
                setSorting({...allSortValues, sortedUp: false, name: 'none'})
            } else if (allSortValues.sortedUp === true && allSortValues.name !== 'Sex') {
                props.setTableAC(sortedTable.sort((a, b) => {
                    setSorting({...allSortValues, sortedUp: true, name: 'Sex'})
                    return a.Sex.toLocaleLowerCase() < b.Sex.toLocaleLowerCase()
                }))
            }
        } else if (name === 'Age') {
            if (!allSortValues.sortedUp) {
                props.setTableAC(sortedTable.sort((a, b) => {
                    setSorting({...allSortValues, sortedUp: true, name: 'Age'})
                    return a.Age < b.Age
                }))
            } else if (allSortValues.sortedUp === true && allSortValues.name === 'Age') {
                props.setTableAC(sortedTable.reverse());
                setSorting({...allSortValues, sortedUp: false, name: 'none'})
            } else if (allSortValues.sortedUp === true && allSortValues.name !== 'Age') {
                props.setTableAC(sortedTable.sort((a, b) => {
                    setSorting({...allSortValues, sortedUp: true, name: 'Age'})
                    return a.Age < b.Age
                }))
            }
        }

    }


    const [id, setActiveState] = useState('0');

    const sendNewUser = (e) => {
        if (e.Login && e.Email) {
            props.submit(e);
        } else if (!e.Login && !e.Email) {
            alert('Login and Email is required')
        } else if (!e.Login) {
            alert('Login is required')
        } else if (!e.Email) {
            alert('Email is required')
        }


    }

    const sendUpdates = (e) => {

        let zero = '0'
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

        if (e.target.name === 'Email') {
            let email = e.target.value;

            if (email.match(pattern)) {
                setActiveState(zero)
                props.updateJsonTable(props.table[e.target.id - 1], e.target.id);
            } else if (!email.match(pattern)) {
                if (email === "") {
                    alert('Email is required')
                    setActiveState(e.target.id + e.target.name)
                } else {
                    alert('Invalid email format')
                    setActiveState(e.target.id + e.target.name)
                }
            }

        }

        if (e.target.name === 'Login') {

            let login = e.target.value;
            if (login) {
                setActiveState(zero)
                props.updateJsonTable(props.table[e.target.id - 1], e.target.id);
            } else {
                setActiveState(e.target.id + e.target.name)
                alert('Login is required')

            }
        }
    }

    const deleteUser = (e) => {
        props.deleteUser(e.currentTarget.id);
    }


    let table = props.table.map(t => <div className={s.tableRow}>
        <div className={s.tableButtons}>
            <div className={s.tableBtnTrash}>
                <button id={t.id} onClick={deleteUser}>
                    <TrashIcon/>
                </button>
            </div>
        </div>
        <div>
            <tr key={t.id}>
                {id !== t.id.toString() + 'Login' ?
                    <td><input id={t.id} onBlur={sendUpdates} onChange={props.changeInput} value={t.Login}
                               name='Login'/></td> :
                    <td><input id={t.id} className={s.unValidated} onBlur={sendUpdates} onChange={props.changeInput}
                               value={t.Login}
                               name='Login'/></td>
                }

                {id !== t.id.toString() + 'Email' ?
                    <td><input id={t.id} type='email' onBlur={sendUpdates} onChange={props.changeInput}
                               value={t.Email}
                               name='Email'/></td> :
                    <td><input id={t.id} type='email' className={s.unValidated} onBlur={sendUpdates}
                               onChange={props.changeInput} value={t.Email}
                               name='Email'/></td>

                }
                <td><input id={t.id} onBlur={sendUpdates} onChange={props.changeInput} value={t.Country}
                           name='Country'/></td>
                <td><input id={t.id} onBlur={sendUpdates} onChange={props.changeInput} value={t.Sex}
                           name='Sex'/></td>
                <td><input id={t.id} onBlur={sendUpdates} onChange={props.changeInput} value={t.Age}
                           name='Age'/></td>
            </tr>
        </div>
    </div>)


    return (<div className={s.componentWrap}>
        <div>
            <button className={s.refreshButton} onClick={(e) => props.setTable(e)}>REFRESH TABLE</button>
        </div>
        <div>

            <table>
                <thead>
                <div className={s.indexBox}>
                    <div className={s.indexBox_Item} onClick={(e) => SortingTableFunc(e, true)} name='Login'>Login</div>
                    <div className={s.indexBox_Item} onClick={(e) => SortingTableFunc(e, true)} name='Email'>Email</div>
                    <div className={s.indexBox_Item} onClick={(e) => SortingTableFunc(e, true)} name='Country'>Country
                    </div>
                    <div className={s.indexBox_Item} onClick={(e) => SortingTableFunc(e, true)} name='Sex'>Sex</div>
                    <div className={s.indexBox_Item} onClick={(e) => SortingTableFunc(e, true)} name='Age'>Age</div>
                </div>
                <div className={s.addUserArea}>
                    <AddNewUserForm onSubmit={sendNewUser}/>
                </div>
                </thead>
                <tbody>
                {table}
                </tbody>
            </table>

        </div>
    </div>)
}
export default ContentComponent