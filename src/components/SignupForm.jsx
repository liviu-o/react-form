import { useFormik } from 'formik';
import Dropdown from './Dropdown';
import './SignupForm.css';

const SignupForm = () => {

  const palaceList = [
    {
      name: 'Hampton Court Palace',
      value: 'hamptonCourtPalace'
    },
    {
      name: 'Tower Of London',
      value: 'towerOfLondon'
    },
    {
      name: 'Banqueting House',
      value: 'banquetingHouse'
    },
    {
      name: 'Kensington Palace',
      value: 'kensingtonPalace'
    },
    {
      name: 'Kew Palace',
      value: 'kewPalace'
    },
    {
      name: 'Hillsborough Castle',
      value: 'hillsboroughCastle'
    }
  ]

  const countryList = [
    {
      name: 'United Kingdom',
      value: 'GB'
    },
    {
      name: 'Australia',
      value: 'AU'
    },
    {
      name: 'Brazil',
      value: 'BR'
    },
    {
      name: 'Canada',
      value: 'CA'
    },
    {
      name: 'China',
      value: 'CN'
    },
    {
      name: 'France',
      value: 'FR'
    },
    {
      name: 'Germany',
      value: 'DE'
    },
    {
      name: 'Ireland',
      value: 'IE'
    },
    {
      name: 'Italy',
      value: 'IT'
    },
    {
      name: 'Japan', 
      value: 'JP'
    },
    {
      name: 'Portugal',
      value: 'PT'
    },
    {
      name: 'Russia',
      value: 'RU'
    },
    {
      name: 'Spain',
      value: 'ES'
    },
    {
      name: 'United States',  
      value: 'US'
    },
    {
      name: 'Other',
      value: 'other'
    }
  ]
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className='form-component' onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <div className='py-2'>
        <input
        className='form-control block w-ful'
          id="email"
          name="email"
          type="email"
          placeholder='Enter email address'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <small id="exampleInputGroup1__BV_description_" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
       <Dropdown data={palaceList} />
       <Dropdown data={countryList} />
       <input type="submit" value="Submit" />
    </form>
  );
};

export default SignupForm;