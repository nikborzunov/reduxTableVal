import React from "react"
import s from './AddNewUserForm.module.css'
import {Field, reduxForm} from "redux-form";
import AddIcon from "../../icons/addIcon";

let AddNewUserForm = (props) => {
    const {handleSubmit} = props
    return (
        <form className={s.profileChangeForm} onSubmit={handleSubmit}>

            <div className={s.postStatusBtnWrap}>
                <div className={s.postStatusBtn}>
                    <button type='submit'>
                        <div className={s.tableBtnAdd}>
                            <AddIcon className={s.tableBtnAdd_Item}/>
                        </div>
                    </button>
                </div>
            </div>

            <div className={s.profileChangeForm_Item} >
                <div className={s.profileChangeForm_textArea}><Field name='Login' component='input' type='text' placeholder='Login' /></div>
            </div>
            <div className={s.profileChangeForm_Item} >
                <div className={s.profileChangeForm_textArea}><Field name='Email' component='input' type='email' placeholder='Email' /></div>
            </div>
            <div className={s.profileChangeForm_Item} >
                <div className={s.profileChangeForm_textArea}><Field name='Country' component='input' type='text' placeholder='Country' /></div>
            </div>
            <div className={s.profileChangeForm_Item} >
                <div className={s.profileChangeForm_textArea}><Field name='Sex' component='input' type='text' placeholder='Sex' /></div>
            </div>
            <div className={s.profileChangeForm_Item} >
                <div className={s.profileChangeForm_textArea}><Field name='Age' component='input' type='text' placeholder='Age' /></div>
            </div>
        </form>
    )
}

AddNewUserForm = reduxForm({form: 'statusChangeForm'})(AddNewUserForm)

export default AddNewUserForm