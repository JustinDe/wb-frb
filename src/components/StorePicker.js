import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef(); //Creates a ref so that we can get the text in the input tag
    
    goToStore = event => { // Special syntax to be able to use 'this' inside of method
        //Stops the page from refreshing on form submit    
        event.preventDefault();

        const storeName = this.myInput.current.value;

        //push state lets us use react router to change a page without refreshing
        this.props.history.push(`/store/${storeName}`);
    };
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />
                <button type="submit">Visit Store!!</button>
            </form>
        );
    }
}

export default StorePicker;