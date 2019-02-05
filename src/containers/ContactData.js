import React , {Component} from 'react';
import Button from '../components/UI/Button/Button';
import Spinner from '../components/UI/Spinner/Spinner';
import './ContactData.css';
import axios from '../axios-orders';
import Input from '../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
         const order = {
             ingredients : this.props.ingredients,
             price: this.props.price,
             customer: {
                 name: 'Adepoju Damilare',
                 address: {
                     street: '13, Yaba, Lagos',
                     country: 'Nigeria'
                 },
                 email: 'dami@mail.com',
                 phone: '08012345678'
             },
             deliveryMethod: 'Ship'
         }
        axios.post('/orders.json', order).then(response => {
            this.setState({loading: false});
            this.props.history.push('/');
        })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render (){
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
                <Input inputtype="input" type="email" name="email" placeholder="Your email" />
                <Input inputtype="input" type="text" name="street" placeholder="Address" />
                <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading){
            form = <Spinner />;
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Details</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;