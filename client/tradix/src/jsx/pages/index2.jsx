import React, { useEffect } from 'react';
 import { Link } from 'react-router-dom';
// import { Row, Col, Card } from 'react-bootstrap'
import Header1 from './../layout/header1';
import Footer1 from './../layout/footer1';
import Bottom from './../element/bottom';
import Testimonial from '../element/testimonial';

// Image
import bitcoin_bag_img from './../../images/bitcoin_bag.jpg';
import { connect } from 'react-redux'
import { logUserIn, RegisterUser } from '../../redux/app_state/actions'



function Homepage2({ logUserIn, registerUser }) {

    // Purpose of this func
    // After Code-Spliting the bundled files
    // The App does not load the single page completely.
    // SOLUTION:
    // 1. Reload page after the first complete DOM load-up
    useEffect(() => {
        // Get The Refresh Count First!
        const num_of_refresh = JSON.parse(localStorage.getItem('num_of_refresh'))

         // On Component Mount Persist The Refresh Count onCondition Second
        localStorage.setItem('num_of_refresh', JSON.stringify((num_of_refresh >=2 ? -1 : num_of_refresh) + 1))

        setTimeout(() => {
            if (num_of_refresh <= 1) {
                window.location.reload()
            }
        }, 400)
    }, [])


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    /* const handle_login_submit = (e) => {
        e.preventDefault()

        // Grab form
        const form = document.querySelector('.signin_validate');
        const email = form.email.value;
        const password = form.password.value;

        const Client = {
            email,
            password
        }

        logUserIn(Client);
        
    } */


    const handle_signup_submit = (e) => {
        e.preventDefault();

        // Grab form fields
        const form = document.querySelector('.signup_validate');
        const name = form.name.value;
        const lastname = form.lastname.value;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;
        
        const country = form.country.value

        // Check here to see if
        // there is a referral ID
        const query_paramter = window.location.search
        const query_array = query_paramter.split("?ref=")
        let referral_ID;
        try {
            referral_ID = query_array[1]
        }
        catch (e) {
            alert('Err thrown in getting referral ID')
        }

        // console.log("query parameter ==", query_array[1])
        // console.log("query parameter ==", typeof referral_ID)

        const new_user = {
            name,
            lastname,
            username,
            email,
            password,
            confirmPassword,
            country,
            referral_ID:  referral_ID ? referral_ID : null
        }
        // console.log(new_user)

        registerUser(new_user)
    }

    return (
        <>
            <Header1 />
            <div className="intro2"  id="intro" data-scroll-index="0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-12">
                            <div className="intro-content text-center">
                                <h1>Every investment leads to profit only</h1>
                                <p>Its all about how you spend your money.</p>
                                <div className="intro-form">
                                    <form action="#">
                                        <input type="text" className="form-control" placeholder="Subscribe Now" />
                                        <button type="submit">
                                            <i className="la la-arrow-right first"></i>
                                            <i className="la la-arrow-right second"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="exchange-form">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-11 col-lg-11">
                            <div className="intro-form-exchange">
                                {/* <coin-ponent shadow="sm" border-radius="6" /> */}
                                <div className="auth-form card">
                                    <div className="card-header justify-content-center">
                                        <h4 className="card-title">Create Account</h4>
                                    </div>
                                    <div className="card-body">
                                        {/* ========= Form-Section ======== */}
                                        <form onSubmit={handle_signup_submit} name="myform" className="signup_validate">
                                            <div className="row">
                                                <div className="col-xl-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input type="text" className="form-control" placeholder="Name" name="name" required />
                                                    </div>  
                                                </div>
                                                <div className="col-xl-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Last Name</label>
                                                        <input type="text" className="form-control" placeholder="Last name" name="lastname" required />
                                                    </div> 
                                                </div>
                                                <div className="col-xl-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Username</label>
                                                        <input type="text" className="form-control" placeholder="username" name="username" required />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="email" className="form-control" placeholder="hello@example.com"
                                                            name="email" required />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input type="password" className="form-control" placeholder="Password"
                                                            name="password" required />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Confirm Password</label>
                                                        <input type="password" className="form-control" placeholder="Confirm Password"
                                                            name="confirm_password" required />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-md-6">
                                                    <div className="form-group col-xl-6">
                                                        <label className="mr-sm-2">Country</label>
                                                        <select required className="form-control" name="country">
                                                            <option value="">Select</option>
                                                            <option value="Afghanistan">Afghanistan</option>
                                                            <option value="Åland Islands">Åland Islands</option>
                                                            <option value="Albania">Albania</option>
                                                            <option value="Algeria">Algeria</option>
                                                            <option value="American Samoa">American Samoa</option>
                                                            <option value="Andorra">Andorra</option>
                                                            <option value="Angola">Angola</option>
                                                            <option value="Anguilla">Anguilla</option>
                                                            <option value="Antarctica">Antarctica</option>
                                                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                            <option value="Argentina">Argentina</option>
                                                            <option value="Armenia">Armenia</option>
                                                            <option value="Aruba">Aruba</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Austria">Austria</option>
                                                            <option value="Azerbaijan">Azerbaijan</option>
                                                            <option value="Bahamas">Bahamas</option>
                                                            <option value="Bahrain">Bahrain</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                            <option value="Barbados">Barbados</option>
                                                            <option value="Belarus">Belarus</option>
                                                            <option value="Belgium">Belgium</option>
                                                            <option value="Belize">Belize</option>
                                                            <option value="Benin">Benin</option>
                                                            <option value="Bermuda">Bermuda</option>
                                                            <option value="Bhutan">Bhutan</option>
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina
                                                        </option>
                                                            <option value="Botswana">Botswana</option>
                                                            <option value="Bouvet Island">Bouvet Island</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="British Indian Ocean Territory">British Indian
                                                            Ocean Territory</option>
                                                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                            <option value="Bulgaria">Bulgaria</option>
                                                            <option value="Burkina Faso">Burkina Faso</option>
                                                            <option value="Burundi">Burundi</option>
                                                            <option value="Cambodia">Cambodia</option>
                                                            <option value="Cameroon">Cameroon</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="Cape Verde">Cape Verde</option>
                                                            <option value="Cayman Islands">Cayman Islands</option>
                                                            <option value="Central African Republic">Central African
                                                            Republic</option>
                                                            <option value="Chad">Chad</option>
                                                            <option value="Chile">Chile</option>
                                                            <option value="China">China</option>
                                                            <option value="Christmas Island">Christmas Island</option>
                                                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands
                                                        </option>
                                                            <option value="Colombia">Colombia</option>
                                                            <option value="Comoros">Comoros</option>
                                                            <option value="Congo">Congo</option>
                                                            <option value="Congo, The Democratic Republic of The">Congo, The
                                                            Democratic Republic of The</option>
                                                            <option value="Cook Islands">Cook Islands</option>
                                                            <option value="Costa Rica">Costa Rica</option>
                                                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                            <option value="Croatia">Croatia</option>
                                                            <option value="Cuba">Cuba</option>
                                                            <option value="Cyprus">Cyprus</option>
                                                            <option value="Czech Republic">Czech Republic</option>
                                                            <option value="Denmark">Denmark</option>
                                                            <option value="Djibouti">Djibouti</option>
                                                            <option value="Dominica">Dominica</option>
                                                            <option value="Dominican Republic">Dominican Republic</option>
                                                            <option value="Ecuador">Ecuador</option>
                                                            <option value="Egypt">Egypt</option>
                                                            <option value="El Salvador">El Salvador</option>
                                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                            <option value="Eritrea">Eritrea</option>
                                                            <option value="Estonia">Estonia</option>
                                                            <option value="Ethiopia">Ethiopia</option>
                                                            <option value="Falkland Islands (Malvinas)">Falkland Islands
                                                            (Malvinas)</option>
                                                            <option value="Faroe Islands">Faroe Islands</option>
                                                            <option value="Fiji">Fiji</option>
                                                            <option value="Finland">Finland</option>
                                                            <option value="France">France</option>
                                                            <option value="French Guiana">French Guiana</option>
                                                            <option value="French Polynesia">French Polynesia</option>
                                                            <option value="French Southern Territories">French Southern
                                                            Territories</option>
                                                            <option value="Gabon">Gabon</option>
                                                            <option value="Gambia">Gambia</option>
                                                            <option value="Georgia">Georgia</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="Ghana">Ghana</option>
                                                            <option value="Gibraltar">Gibraltar</option>
                                                            <option value="Greece">Greece</option>
                                                            <option value="Greenland">Greenland</option>
                                                            <option value="Grenada">Grenada</option>
                                                            <option value="Guadeloupe">Guadeloupe</option>
                                                            <option value="Guam">Guam</option>
                                                            <option value="Guatemala">Guatemala</option>
                                                            <option value="Guernsey">Guernsey</option>
                                                            <option value="Guinea">Guinea</option>
                                                            <option value="Guinea-bissau">Guinea-bissau</option>
                                                            <option value="Guyana">Guyana</option>
                                                            <option value="Haiti">Haiti</option>
                                                            <option value="Heard Island and Mcdonald Islands">Heard Island
                                                            and Mcdonald Islands</option>
                                                            <option value="Holy See (Vatican City State)">Holy See (Vatican
                                                            City State)</option>
                                                            <option value="Honduras">Honduras</option>
                                                            <option value="Hong Kong">Hong Kong</option>
                                                            <option value="Hungary">Hungary</option>
                                                            <option value="Iceland">Iceland</option>
                                                            <option value="India">India</option>
                                                            <option value="Indonesia">Indonesia</option>
                                                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic
                                                            of</option>
                                                            <option value="Iraq">Iraq</option>
                                                            <option value="Ireland">Ireland</option>
                                                            <option value="Isle of Man">Isle of Man</option>
                                                            <option value="Israel">Israel</option>
                                                            <option value="Italy">Italy</option>
                                                            <option value="Jamaica">Jamaica</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Jersey">Jersey</option>
                                                            <option value="Jordan">Jordan</option>
                                                            <option value="Kazakhstan">Kazakhstan</option>
                                                            <option value="Kenya">Kenya</option>
                                                            <option value="Kiribati">Kiribati</option>
                                                            <option value="Korea, Democratic People's Republic of">Korea,
                                                            Democratic People's Republic of</option>
                                                            <option value="Korea, Republic of">Korea, Republic of</option>
                                                            <option value="Kuwait">Kuwait</option>
                                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="Lao People's Democratic Republic">Lao People's
                                                            Democratic Republic</option>
                                                            <option value="Latvia">Latvia</option>
                                                            <option value="Lebanon">Lebanon</option>
                                                            <option value="Lesotho">Lesotho</option>
                                                            <option value="Liberia">Liberia</option>
                                                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya
                                                        </option>
                                                            <option value="Liechtenstein">Liechtenstein</option>
                                                            <option value="Lithuania">Lithuania</option>
                                                            <option value="Luxembourg">Luxembourg</option>
                                                            <option value="Macao">Macao</option>
                                                            <option value="Macedonia, The Former Yugoslav Republic of">
                                                                Macedonia, The Former Yugoslav Republic of</option>
                                                            <option value="Madagascar">Madagascar</option>
                                                            <option value="Malawi">Malawi</option>
                                                            <option value="Malaysia">Malaysia</option>
                                                            <option value="Maldives">Maldives</option>
                                                            <option value="Mali">Mali</option>
                                                            <option value="Malta">Malta</option>
                                                            <option value="Marshall Islands">Marshall Islands</option>
                                                            <option value="Martinique">Martinique</option>
                                                            <option value="Mauritania">Mauritania</option>
                                                            <option value="Mauritius">Mauritius</option>
                                                            <option value="Mayotte">Mayotte</option>
                                                            <option value="Mexico">Mexico</option>
                                                            <option value="Micronesia, Federated States of">Micronesia,
                                                            Federated States of</option>
                                                            <option value="Moldova, Republic of">Moldova, Republic of
                                                        </option>
                                                            <option value="Monaco">Monaco</option>
                                                            <option value="Mongolia">Mongolia</option>
                                                            <option value="Montenegro">Montenegro</option>
                                                            <option value="Montserrat">Montserrat</option>
                                                            <option value="Morocco">Morocco</option>
                                                            <option value="Mozambique">Mozambique</option>
                                                            <option value="Myanmar">Myanmar</option>
                                                            <option value="Namibia">Namibia</option>
                                                            <option value="Nauru">Nauru</option>
                                                            <option value="Nepal">Nepal</option>
                                                            <option value="Netherlands">Netherlands</option>
                                                            <option value="Netherlands Antilles">Netherlands Antilles
                                                        </option>
                                                            <option value="New Caledonia">New Caledonia</option>
                                                            <option value="New Zealand">New Zealand</option>
                                                            <option value="Nicaragua">Nicaragua</option>
                                                            <option value="Niger">Niger</option>
                                                            <option value="Nigeria">Nigeria</option>
                                                            <option value="Niue">Niue</option>
                                                            <option value="Norfolk Island">Norfolk Island</option>
                                                            <option value="Northern Mariana Islands">Northern Mariana
                                                            Islands</option>
                                                            <option value="Norway">Norway</option>
                                                            <option value="Oman">Oman</option>
                                                            <option value="Pakistan">Pakistan</option>
                                                            <option value="Palau">Palau</option>
                                                            <option value="Palestinian Territory, Occupied">Palestinian
                                                            Territory, Occupied</option>
                                                            <option value="Panama">Panama</option>
                                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                                            <option value="Paraguay">Paraguay</option>
                                                            <option value="Peru">Peru</option>
                                                            <option value="Philippines">Philippines</option>
                                                            <option value="Pitcairn">Pitcairn</option>
                                                            <option value="Poland">Poland</option>
                                                            <option value="Portugal">Portugal</option>
                                                            <option value="Puerto Rico">Puerto Rico</option>
                                                            <option value="Qatar">Qatar</option>
                                                            <option value="Reunion">Reunion</option>
                                                            <option value="Romania">Romania</option>
                                                            <option value="Russian Federation">Russian Federation</option>
                                                            <option value="Rwanda">Rwanda</option>
                                                            <option value="Saint Helena">Saint Helena</option>
                                                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis
                                                        </option>
                                                            <option value="Saint Lucia">Saint Lucia</option>
                                                            <option value="Saint Pierre and Miquelon">Saint Pierre and
                                                            Miquelon</option>
                                                            <option value="Saint Vincent and The Grenadines">Saint Vincent
                                                            and The Grenadines</option>
                                                            <option value="Samoa">Samoa</option>
                                                            <option value="San Marino">San Marino</option>
                                                            <option value="Sao Tome and Principe">Sao Tome and Principe
                                                        </option>
                                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                                            <option value="Senegal">Senegal</option>
                                                            <option value="Serbia">Serbia</option>
                                                            <option value="Seychelles">Seychelles</option>
                                                            <option value="Sierra Leone">Sierra Leone</option>
                                                            <option value="Singapore">Singapore</option>
                                                            <option value="Slovakia">Slovakia</option>
                                                            <option value="Slovenia">Slovenia</option>
                                                            <option value="Solomon Islands">Solomon Islands</option>
                                                            <option value="Somalia">Somalia</option>
                                                            <option value="South Africa">South Africa</option>
                                                            <option value="South Georgia and The South Sandwich Islands">
                                                                South Georgia and The South Sandwich Islands</option>
                                                            <option value="Spain">Spain</option>
                                                            <option value="Sri Lanka">Sri Lanka</option>
                                                            <option value="Sudan">Sudan</option>
                                                            <option value="Suriname">Suriname</option>
                                                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen
                                                        </option>
                                                            <option value="Swaziland">Swaziland</option>
                                                            <option value="Sweden">Sweden</option>
                                                            <option value="Switzerland">Switzerland</option>
                                                            <option value="Syrian Arab Republic">Syrian Arab Republic
                                                        </option>
                                                            <option value="Taiwan, Province of China">Taiwan, Province of
                                                            China</option>
                                                            <option value="Tajikistan">Tajikistan</option>
                                                            <option value="Tanzania, United Republic of">Tanzania, United
                                                            Republic of</option>
                                                            <option value="Thailand">Thailand</option>
                                                            <option value="Timor-leste">Timor-leste</option>
                                                            <option value="Togo">Togo</option>
                                                            <option value="Tokelau">Tokelau</option>
                                                            <option value="Tonga">Tonga</option>
                                                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                            <option value="Tunisia">Tunisia</option>
                                                            <option value="Turkey">Turkey</option>
                                                            <option value="Turkmenistan">Turkmenistan</option>
                                                            <option value="Turks and Caicos Islands">Turks and Caicos
                                                            Islands</option>
                                                            <option value="Tuvalu">Tuvalu</option>
                                                            <option value="Uganda">Uganda</option>
                                                            <option value="Ukraine">Ukraine</option>
                                                            <option value="United Arab Emirates">United Arab Emirates
                                                        </option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                            <option value="United States">United States</option>
                                                            <option value="United States Minor Outlying Islands">United
                                                            States Minor Outlying Islands</option>
                                                            <option value="Uruguay">Uruguay</option>
                                                            <option value="Uzbekistan">Uzbekistan</option>
                                                            <option value="Vanuatu">Vanuatu</option>
                                                            <option value="Venezuela">Venezuela</option>
                                                            <option value="Viet Nam">Viet Nam</option>
                                                            <option value="Virgin Islands, British">Virgin Islands, British
                                                        </option>
                                                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.
                                                        </option>
                                                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                            <option value="Western Sahara">Western Sahara</option>
                                                            <option value="Yemen">Yemen</option>
                                                            <option value="Zambia">Zambia</option>
                                                            <option value="Zimbabwe">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </div>                                           
                                            </div>
                                            <div className="text-center mt-4">
                                                <button type="submit" className="btn btn-success btn-block">Sign up</button>
                                            </div>
                                        </form>
                                        <div className="new-account mt-3">
                                            <p>Already have an account?<br /> <Link className="text-primary" to={'login'}>Sign in</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="market section-padding page-section" data-scroll-index="1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2>We are The World's Leading Financial Platform</h2>
                                <p>Join thousands of investors world wide earning from our financial plans.</p>
                            </div>
                        </div>
                    </div>
                    <div className="info ">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="info-content">
                                        <span><i className="la la-shield"></i></span>
                                        <h4>Best rates on the market</h4>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="info-content">
                                        <span><i className="la la-cubes"></i></span>
                                        <h4>Transparent 0.25% fee</h4>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="info-content">
                                        <span><i className="la la-clock-o"></i></span>
                                        <h4>Quick and easy fund withdraw</h4>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="info-content">
                                        <span><i className="la la-exchange"></i></span>
                                        <h4>Profitable exchanges</h4>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="info-content">
                                        <span><i className="la la-support"></i></span>
                                        <h4>24/7 live chat support</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="market-table">
                                <h3 className="text-center">Recent transcation</h3>
                                <div className="table-responsive">
                                    <table className="table mb-0 table-responsive-sm table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Customers</th>
                                                <th>Currencies</th>
                                                <th>Amount</th>
                                                <th>Rate / Change</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="coin_icon">
                                                    <span>Brian Philips</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc BTC"></i>
                                                    <span>Bitcoin <b>BTC</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                                </td>
                                                <td>
                                                    <span className="text-success">+1.13%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td className="coin_icon">
                                                    <span>Claire Cole</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc ETH"></i>
                                                    <span>Ethereum <b>ETH</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                            </td>
                                                <td>
                                                    <span className="text-success">+1.13%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td className="coin_icon">
                                                    <span>Nicole Hart</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc ETH"></i>
                                                    <span>Ethereum <b>ETH</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                            </td>
                                                <td>
                                                    <span className="text-success">+1.13%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td className="coin_icon">
                                                    <span>Oliver Tomson</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc BCH-alt"></i>
                                                    <span>Bitcoin Cash <b>BCH</b></span>
                                                </td>

                                                <td>
                                                    USD 680,175.06
                                            </td>
                                                <td>
                                                    <span className="text-success">+1.13%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td className="coin_icon">
                                                    <span>Judith Carlson</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc LTC"></i>
                                                    <span>Litecoin <b>LTC</b></span>
                                                </td>

                                                <td>
                                                    USD 67,275.07
                                                </td>
                                                <td>
                                                    <span className="text-danger">-0.47%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td className="coin_icon">
                                                    <span>Anastasia Hayes</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc BTC"></i>
                                                    <span>Bitcoin <b>BTC</b></span>
                                                </td>

                                                <td>
                                                    USD 80,105.06
                                                </td>
                                                <td>
                                                    <span className="text-success">+1.15%</span>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td className="coin_icon">
                                                    <span>Robert Steve</span>
                                                </td>
                                                <td className="coin_icon">
                                                    <i className="cc LTC"></i>
                                                    <span>Litecoin <b>LTC</b></span>
                                                </td>

                                                <td>
                                                    USD 95,275.07
                                                </td>
                                                <td>
                                                    <span className="text-success">+2.41%</span>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="product-feature section-padding bg-light">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title">
                                <h2 className="text-left">24-hour statistics</h2>
                                <p>We are dedicated to providing you with the best possible trade analysis with a <i>100% </i> 
                                success rate, create a business portfolio with us today.</p>
                            </div>
                            <div className="product-feature-content">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="product-feature-text">
                                            <h4><span><i className="fa fa-shield"></i></span> 40 %</h4>
                                            <p>New users</p>
                                        </div>
                                        <div className="product-feature-text">
                                            <h4><span><i className="fa fa-adjust"></i></span> 83 %</h4>
                                            <p>Regular users</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div id="sparkline11"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-primary"><i className="la la-exchange"></i></span>
                                        <h4>1900</h4>
                                        <p>Transactions made</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-secondary"><i className="la la-trophy"></i></span>
                                        <h4>ETH-BTC</h4>
                                        <p>Today's champion pair</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-success"><i className="la la-user"></i></span>
                                        <h4>15,000+</h4>
                                        <p>Registered customers</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="product-feature-box">
                                        <span className="bg-info"><i className="la la-clock-o"></i></span>
                                        <h4>14.0 minutes</h4>
                                        <p>Average processing time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Get - Started - Section */}
            <div className="getstart section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title">
                                <h2>Get started with these few steps</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content my-4">
                                <span><i className="la la-user-plus"></i></span>
                                <h3>1.</h3>
                                <h3>Create an account</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content my-4">
                                <span><i className="la la-bank"></i></span>
                                <h3>2.</h3>
                                <h3>Pick a financial plan</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="getstart-content my-4">
                                <span><i className="la la-exchange"></i></span>
                                <h3>3.</h3>
                                <h3>Earn daily profit</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Get - Started - Section Bottom */}

            <div className="portfolio section-padding" data-scroll-index="2">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <h2>Create your cryptocurrency portfolio today</h2>
                                <p>WWFX. has a variety of features that make it the best place to start trading</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-7 col-lg-6">
                            <div className="portfolio_list">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-bar-chart"></i></span>
                                            <div className="media-body">
                                                <h4>Build your investments</h4>
                                                <p>Choose a suitable investment plan and jump start your portfolio today.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-calendar-check-o"></i></span>
                                            <div className="media-body">
                                                <h4>Recurring buys</h4>
                                                <p>Invest in cryptocurrency slowly over time by scheduling buys daily,
                                                    weekly,
                                                    or monthly.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-lock"></i></span>
                                            <div className="media-body">
                                                <h4>Vault protection</h4>
                                                <p>For added security, we store your funds in a vault with time delayed
                                                    withdrawals.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="media">
                                            <span className="port-icon"> <i className="la la-mobile"></i></span>
                                            <div className="media-body">
                                                <h4>Mobile access</h4>
                                                <p>Stay on-top of your trade in the market through our platform, using
                                                 the device of your choosing.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="portfolio_img">
                                <img src={bitcoin_bag_img} alt="bitcoin_bag" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="trust section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="trust-content">
                                <span><i className="fa fa-shield"></i></span>
                                <h4>EASY</h4>
                                <p>Create an account, choose your crypto, input your receiving address, and send your funds
                            </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="trust-content">
                                <span><i className="fa fa-cubes"></i></span>
                                <h4>SECURE</h4>
                                <p>As a non-custodial exchange, we don’t hold your deposits, so your funds are never
                                vulnerable to hacks</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="trust-content">
                                <span><i className="fa fa-life-ring"></i></span>
                                <h4>SAFE</h4>
                                <p>Our exchange rates are updated in real time. What you see is what you get--with no
                                additional fees</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="appss section-padding">
                <div className="container">
                    <div className="section-title">
                        <h2>Our pricing plan</h2>
                    </div>
                    <div className="row align-items-center justify-content-between">
                        {/* <div className="col-xl-5 col-lg-5 col-md-12">
                            <div className="appss-img">
                                <img className="img-fluid" src={require('./../../images/app2.png')} alt="" />
                            </div>
                        </div> */}
                        {/* WORK ON THE BOOTSTRAP COLUMNS NOW! ASAP!!! */}
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="appss-content">
                                <h3>Start Up Plan 25 %</h3>
                                <ul>
                                    <li><i className="la la-check"></i> Minimum deposit: $500</li>
                                    <li><i className="la la-check"></i> Maximum deposit: $5,000</li>
                                    <li><i className="la la-check"></i> Duration:  7days</li>
                                    <li><i className="la la-check"></i> 25 %  daily</li>
                                    <li><i className="la la-check"></i> Free support</li>
                                </ul>
                                <div className="mt-4">
                                    <Link to={'/login'} className="btn btn-success my-1 waves-effect">
                                        Invest
                                    </Link>

                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 mt-5">
                                <div className="appss-content">
                                    <h3>Business Plan 35 %</h3>
                                    <ul>
                                        <li><i className="la la-check"></i> Minimum deposit: $5,000</li>
                                        <li><i className="la la-check"></i> Maximum deposit: $15,000</li>
                                        <li><i className="la la-check"></i> Duration:  7days</li>
                                        <li><i className="la la-check"></i> 35 %  daily</li>
                                        <li><i className="la la-check"></i> Free support</li>
                                    </ul>
                                    <div className="mt-4">
                                        <Link to={'/login'} className="btn btn-success my-1 waves-effect">
                                            Invest
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 mt-5">
                                <div className="appss-content">
                                    <h3>Corporate Plan 50 %</h3>
                                    <ul>
                                        <li><i className="la la-check"></i> Minimum deposit: $15,000</li>
                                        <li><i className="la la-check"></i> Maximum deposit: $50,000</li>
                                        <li><i className="la la-check"></i> Duration:  7days</li>
                                        <li><i className="la la-check"></i> 50 %  daily</li>
                                        <li><i className="la la-check"></i> Free support</li>
                                    </ul>
                                    <div className="mt-4">
                                        <Link to={'/login'} className="btn btn-success my-1 waves-effect">
                                            Invest
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 mt-5">
                                <div className="appss-content">
                                    <h3>5-Star-Corporate Plan 80 %</h3>
                                    <ul>
                                        <li><i className="la la-check"></i> Minimum deposit: $50,000</li>
                                        <li><i className="la la-check"></i> Maximum deposit: $100,000</li>
                                        <li><i className="la la-check"></i> Withdrawal interval: 1</li>
                                        <li><i className="la la-check"></i> 80 %  daily</li>
                                        <li><i className="la la-check"></i> Free support</li>
                                    </ul>
                                    <div className="mt-4">
                                        <Link to={'/login'} className="btn btn-success my-1 waves-effect">
                                            Invest
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial-Section */}
            <div className="testimonial section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title">
                                <h2>What our customer says</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="testimonial-content">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-form section-padding" data-scroll-index="4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-title text-center">
                                <span>Ask Question</span>
                                <h2>Let us hear from you directly!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <div className="info-list">
                                <h4 className="mb-3">Address</h4>
                                <ul>
                                    <li><i className="fa fa-envelope"></i> wealthwisefx@gmail.com</li>
                                    <li><i className="fa fa-map-marker"></i>  92 Lichfield Street, Tamworth, Staffordshire B79 7QF England.</li>
                                    {/* <li><i className="fa fa-phone"></i> (+880) 1243 665566</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 col-md-8 col-sm-12">
                            <form method="post" name="myform" className="contact_validate">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Full name
                                        </label>
                                            <input type="text" className="form-control" id="contactName" placeholder="Full name"
                                                name="firstname" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label>
                                                Email
                                        </label>
                                            <input type="email" className="form-control" name="email"
                                                placeholder="hello@domain.com" />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control p-3" name="message" rows="5"
                                                placeholder="Tell us what we can help you with!"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary px-4 py-2">
                                    Send message
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

           <Bottom />

            <Footer1 />

        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logUserIn: (user) => dispatch(logUserIn(user)),
        registerUser: (user) => dispatch(RegisterUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Homepage2);